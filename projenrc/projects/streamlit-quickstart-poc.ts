import * as fs from 'fs';
import * as path from 'path';
import * as nunjucks from 'nunjucks';
import { Component, Project, SampleFile } from 'projen';
import { PythonProject } from 'projen/lib/python';

interface StreamlitQuickStartPOCProps {
  parentProject: Project;
  pocName: string;
  pocPackageName: string;
  pocDescription?: string;
  additionalDeps?: string[];
  gitIgnore?: string[];
  readme?: {
    additionalPrerequisits?: string[];
    pocGoal?: {
      overview: string;
      architectureImage: boolean;
      flowSteps?: string[];
    };
    /**
     * File walkthrough for the project
     * Note: by default app.py, requirements.txt are already included.
     */
    fileWalkthrough?: {
      includeDefaults?: boolean;
      files: Array<{
        name: string;
        description: string;
      }>;
    };
    extraSteps?: Array<{
      instructions: string;
      command?: string;
    }>;
  };
  skipApp?: boolean;
}

export class StreamlitQuickStartPOC extends PythonProject {
  constructor(props: StreamlitQuickStartPOCProps) {
    super({
      parent: props.parentProject,
      outdir: path.join('genai-quickstart-pocs-python', props.pocPackageName),
      projenrcTs: true,
      name: props.pocPackageName,
      description: props.pocDescription,
      deps: ['streamlit', 'boto3', 'botocore', 'python-dotenv'],
      pip: true,
      gitIgnoreOptions: {
        ignorePatterns: ['.env/*', 'venv/*', ...props.gitIgnore ?? []],
      },
      venv: true,
      sample: false,
      authorEmail: 'no-email@aws.amazon.com',
      authorName: 'AWS',
      license: 'MIT-0',
      moduleName: props.pocPackageName,
      version: '0.0.1',
      github: false,
    });
    for (const dep of props.additionalDeps ?? []) {
      this.addDependency(dep);
    }

    this.addTask('start', {
      description: 'Run Streamlit app in virtual environment',
      exec: [
        // Create venv if it doesn't exist
        '[ ! -d ".env" ] && python3 -m venv .env || true',

        // Run everything else in a single bash context to maintain the activated venv
        'sh -c "source .env/bin/activate && trap deactivate EXIT && streamlit run app.py"',
      ].join(' && '),
    });
    new POCProjectFiles(this, props);
  }

  postSynthesize() {
    // Overriding the default postSynth to avoid every POC installing dependencies!
  }

  runPOC() {
    this.envManager.setupEnvironment();
  }


}

class POCProjectFiles extends Component {
  private pocProps: StreamlitQuickStartPOCProps;
  constructor(project: Project, props: StreamlitQuickStartPOCProps) {
    super(project);
    this.pocProps = props;
  }
  /**
   * Synthesize the project files
   */
  public synthesize(): void {
    new README(this.project, this.pocProps);
    new HOWTO(this.project);
    if (!this.pocProps.skipApp) {
      new AppDotPy(this.project);
    }

  }
}

class README extends SampleFile {
  constructor(scope: Project, pocProps: StreamlitQuickStartPOCProps) {
    const README_TEMPLATE = path.join(
      __dirname,
      'resources',
      'streamlit-readme.md',
    );
    const readmeTemplate = fs.readFileSync(README_TEMPLATE, 'utf-8');
    const readmeContent = nunjucks.renderString(readmeTemplate, {
      pocTitle: pocProps.pocName,
      pocOverview: pocProps.pocDescription,
      pocPath: `genai-quickstart-pocs-python/${pocProps.pocPackageName}`,
      additionalPrerequisits: pocProps.readme?.additionalPrerequisits,
      pocGoal: pocProps.readme?.pocGoal,
      fileWalkthrough: pocProps.readme?.fileWalkthrough,
      extraSteps: pocProps.readme?.extraSteps,
    });
    super(scope, 'README.md', {
      contents: readmeContent,
    });
  }
}

class HOWTO extends SampleFile {
  constructor(scope: Project) {
    const HOWTO_TEMPLATE: string = path.join(
      __dirname,
      'resources',
      'streamlit-howto.md',
    );
    const howtoTemplate = fs.readFileSync(HOWTO_TEMPLATE, 'utf-8');
    super(scope, 'HOWTO.md', {
      contents: howtoTemplate,
    });
  }
}

class AppDotPy extends SampleFile {
  constructor(scope: Project) {
    const APP_TEMPLATE = path.join(__dirname, 'resources', 'streamlit-app.py');
    const appTemplate = fs.readFileSync(APP_TEMPLATE, 'utf-8');
    super(scope, 'app.py', {
      contents: appTemplate,
    });
  }
}
