# GenAI Quick Start PoCs

This repository contains sample code demonstrating various use cases leveraging Amazon Bedrock and Generative AI. Each sample is a separate project with its own directory, and includes a basic Streamlit frontend to help users quickly set up a proof of concept.

##### Authors: Brian Maguire, Dom Bavaro, Ryan Doty, Sudeesh Sasidharan, Tarik Makota

## Sample Proof of Concepts - Python

1. **Amazon-Bedrock-Summarization-Long-Document-POC:**
   This sample demonstrates using Amazon Bedrock and Generative AI to implement a long document summarization use case. Users can upload large PDF documents, which are chunked and summarized using Amazon Bedrock.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-summarization-long-document-poc/images/demo.gif)
2. **Amazon-Bedrock-RAG-OpenSearchServerless-POC:**
   This sample demonstrates creating custom embeddings stored in Amazon OpenSearch Serverless, and answering questions against the indexed embeddings using a Retrieval-Augmented Generation (RAG) architecture with Amazon Bedrock.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-rag-opensearch-serverless-poc/images/demo.gif)
3. **Amazon-Bedrock-RAG-Kendra-POC:**
   This sample implements a RAG-based architecture with Amazon Kendra, allowing users to ask questions against documents stored in an Amazon Kendra index using Amazon Bedrock.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-rag-kendra-poc/images/demo.gif)
4. **Amazon-Bedrock-Image-Generation-POC:**
   This sample demonstrates using Amazon Bedrock and Generative AI to generate images based on text input requests.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-image-generation-poc/images/demo.gif)
5. **Amazon-Bedrock-GenAI-Dynamic-Prompting-Explained-POC:**
   This sample provides a hands-on explanation of how dynamic prompting works in relation to Generative AI, using Amazon Bedrock.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-genai-dynamic-prompting-explained-poc/images/demo.gif)
6. **Amazon-Bedrock-Document-Generator:**
   This sample demonstrates using Amazon Bedrock and Generative AI to perform document generation based on a document template and user-provided details.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-document-generator-poc/images/demo.gif)
7. **Amazon-Bedrock-Document-Comparison-POC:**
   This sample allows users to upload two PDF documents and get a list of all changes between them using Amazon Bedrock and Generative AI.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-document-comparison-poc/images/demo.gif)
8. **Amazon-Bedrock-Claude3-Multi-Modal-Sample:**
   This sample showcases the multi-modal capabilities of Amazon Bedrock (specifically Anthropic Claude 3), allowing users to input text questions, images, or both to get comprehensive descriptions or answers.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-claude3-multi-modal-poc/images/demo.gif)
9. **Amazon-Bedrock-Chat-POC:**
   This sample provides a ChatGPT alternative using Amazon Bedrock and Generative AI, allowing users to ask zero-shot questions and receive responses.
   ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-chat-poc/images/demo.gif)
10. **Amazon-Bedrock-Amazon-Redshift-POC:**
    This sample demonstrates using Amazon Bedrock and Generative AI to ask natural language questions and transform them into SQL queries against Amazon Redshift databases.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-amazon-redshift-poc/images/demo.gif)
11. **Amazon-Bedrock-Amazon-RDS-POC:**
    This sample allows users to ask natural language questions and transform them into SQL queries against Amazon RDS databases using Amazon Bedrock and Generative AI.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-amazon-rds-poc/images/demo.gif)
12. **Amazon-Bedrock-Amazon-Athena-POC:**
    This sample demonstrates using Amazon Bedrock and Generative AI to ask natural language questions and transform them into SQL queries against Amazon Athena databases.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-amazon-athena-poc/images/demo.gif)
13. **Amazon-Bedrock-Streaming-Response-POC:** 
    This sample illustrates the utilization of Amazon Bedrock and Generative AI to implement streaming responses. The application is designed with a straightforward Streamlit frontend, enabling users to input zero-shot requests directly against the Large Language Model (LLM) of their choice, utilizing a streaming response technique with majority of Amazon Bedrock models.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-streaming-response-poc/images/demo.gif)
14. **Amazon-Bedrock-Claude3-Streaming-Response-POC:** 
    This sample illustrates the utilization of Amazon Bedrock and Generative AI to implement streaming responses. The application is designed with a straightforward Streamlit frontend, enabling users to input zero-shot requests directly against Claude 3, utilizing a streaming response technique while leveraging the Anthropic Messages API structure.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-claude3-streaming-response-poc/images/demo.gif)
15. **Amazon-Bedrock-Knowledgebases-RAG-POC:** 
    This sample implements a RAG-based architecture with Amazon Bedrock Knowledge Bases, allowing users to ask questions against documents stored in an Amazon Bedrock Knowledge Base using Amazon Bedrock.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-knowledgebases-rag-poc/images/demo.gif)
16. **Amazon-Bedrock-Langchain-RAG-POC:** 
    This sample implements a RAG-based architecture with Amazon Bedrock Knowledge Bases using Langchain to help orchestrate the retrieval of information from the knowledge base. This allows users to ask questions against documents stored in an Amazon Bedrock Knowledge Base using Amazon Bedrock, and Langchain as an orchestrator.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-langchain-rag-poc/images/demo.gif)
17. **Amazon-Bedrock-Asynchronous-Invocation-POC:** 
    This sample implements asynchronous invocations with Amazon Bedrock allowing users to make multiple simultaneous calls to Bedrock models to decrease overall latency. This allows users to ask questions against 3+ models simultaneously, demonstrating the decrease in latency by doing it asynchronously vs sequentially.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-asynchronous-invocation-poc/images/demo.gif)
18. **Amazon-Bedrock-Model-Playground-POC:** 
    This sample implements an Amazon Bedrock Gen AI Model playground that allows users to select any LLM offered by Amazon Bedrock and ask zero shot questions directly against it. This provides business users the ability to experiment with different Amazon Bedrock LLMs without having access to the AWS console.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-model-playground-poc/images/demo.gif)
19. **Amazon-Bedrock-Claude3-Image-Analysis-POC:** 
    This sample implements an image analysis app that uses Amazon Bedrock and Claude3 to collect data from an image and return as JSON. This provides users the ability to quickly experiment with image analysis use-cases and customize the JSON response to the needs of their image analysis use-case.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-claude3-image-analysis-poc/images/demo.gif)
20. **Amazon-Bedrock-Guardrails-POC**
    This sample implements Amazon Bedrock Guardrails to demonstrate how you can leverage guardrails to prevent malicious prompts and repsonse from your generative AI applications built with Amazon Bedrock.
    ![Alt text](genai-quickstart-pocs-python/amazon-bedrock-guardrails-poc/images/demo.gif)
21. **Amazon-Bedrock-Video-Chapter-Search-POC:**
    This is sample code demonstrating the use of Amazon Transcribe, Amazon Bedrock and Generative AI, to implement a video chapter generator and video search sample.
    ![Amazon Bedrock Video Chapter Creator POC Demo](genai-quickstart-pocs-python/amazon-bedrock-video-chapter-creator-poc/images/demo.gif)
22. **Amazon-Bedrock-Model-Customization-POC**
    The sample notebooks provide guidance on fine-tuning and pre-training models in Bedrock.
    The sample data used in the notebooks can be replaced with any data in csv files to create  fine-tuned and pre-trained models using Amazon Titan Express as the base model.
23. **Amazon-Bedrock-Speech-to-Text-Chat-POC:**
    This sample provides a ChatGPT alternative using Amazon Transcribe, Amazon Polly, Amazon Bedrock and Generative AI, allowing users to ask zero-shot questions using speech-to-text prompts and listen to responses.
    ![Amazon Bedrock Speech-to-Text Chat Demo](genai-quickstart-pocs-python/amazon-bedrock-speech-to-text-chat-poc/images/demo.gif)
24. **Amazon-Bedrock-CSV-Chatbot-POC:**
    This is sample code demonstrating the use of Amazon Bedrock and Generative AI to implement a chatbot is able to converse with the user based on CSV data provided by the user.
    ![Amazon Bedrock CSV Chatbot Demo](genai-quickstart-pocs-python/amazon-bedrock-csv-chatbot-poc/images/demo.gif)
25. **Amazon-Bedrock-Translation-POC:**
    This is sample code demonstrating the use of Amazon Bedrock and Generative AI to translate text from a source to target language.
    ![Amazon Bedrock Translation Demo](genai-quickstart-pocs-python/amazon-bedrock-translation-poc/images/demo.gif)
26. **Amazon-Bedrock-Meeting-Minutes-Summarization-POC:**
    This code demonstrates using Amazon Bedrock and Amazon Transcribe  to generate summarized meeting minutes and key action items. It accepts meeting recordings in formats like mp4, wav, mp4a and txt as input. It then processes these recordings and outputs a text summarizing the key discussion points and action items from the meeting. This summary text can be downloaded as .txt file for review and sharing.
    ![Amazon-Bedrock-Meeting-Minutes-Summarization Demo](genai-quickstart-pocs-python/amazon-bedrock-meeting-minutes-summarization-poc/images/demo.gif)
27. **Amazon-Bedrock-Converse-API-POC:**
    This sample poc demonstrates how to use the Amazon Bedrock converse API to facilitate conversational GenAI use cases. The key feature it demonstrates is how the Amazon Bedrock Converse API is able to retain chat history to provide context aware responses to end users.
    ![Amazon-Bedrock-Converse-API-POC](genai-quickstart-pocs-python/amazon-bedrock-converse-api-poc/images/demo.gif)
28. **Amazon-Bedrock-Converse-Stream-API-POC:**
    This sample poc demonstrates how to use the Amazon Bedrock ConverseStream API to facilitate conversational GenAI use cases. The key feature it demonstrates is how the Amazon Bedrock ConverseStream API provides streaming capabilities to improve end users experience. ConverseStream API is able to retain chat history to provide context aware responses to end users.
    ![Amazon-Bedrock-Converse-Stream-API-POC](genai-quickstart-pocs-python/amazon-bedrock-converse-stream-api-poc/images/demo.gif)
29. **Amazon-Bedrock-Model-Eval-POC:**
    This is sample code aimed to accelerate customers aiming to leverage [Amazon Bedrock Model Evaluator](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html) with custom prompt data. This Proof-of-Concept (POC) enables users to provide a CSV containing data that should be used with Amazon Bedrock Model Evaluator.
    ![Amazon Bedrock Model Evalutor Data Creator POC](genai-quickstart-pocs-python/amazon-bedrock-model-eval-poc/images/demo.gif)
30. **Amazon-Bedrock-Text-Extraction-POC:**
    This is a sample proof of concept demonstrating how customers can leverage large language models to perform text extraction use cases.
    ![Amazon Bedrock Claude3 Long Form Output POC](genai-quickstart-pocs-python/amazon-bedrock-text-extraction-poc/images/demo.gif)
31. **Amazon-Bedrock-Claude3-Long-Form-Output-POC:**
    This is sample code aimed to accelerate customers aiming to handle long form output using Claude3.
    ![Amazon Bedrock Claude3 Long Form Output POC](genai-quickstart-pocs-python/amazon-bedrock-claude3-long-form-output-poc/images/demo.gif)
32. **Amazon-Bedrock-Task-Classification:**
   This sample code demonstrates how to use Amazon Bedrock and Generative AI to implement a task classification bot. The application allows a user to input a task and get the correct classification which then trigger appropriate downstream    workflows to process the task inputted.
   ![Amazon-Bedrock-Task-Classification](genai-quickstart-pocs-python/amazon-bedrock-task-classification/public/demo.gif)
33. **Amazon-Bedrock-Alt-Text-Generator:**
    This sample code demonstrates how to use Amazon Bedrock and Generative AI to create Alt text for all images within a PDF, helping improve accessibility at scale.
    ![Amazon-Bedrock-Alt-Text-Generator](genai-quickstart-pocs-python/amazon-bedrock-alt-text-generator/images/demo.gif)
34. **Amazon-Bedrock-Semantic-Cache:**
    This sample code demonstrates a Retrieval-Augmented Generation (RAG) system using Amazon Bedrock for knowledge retrieval and OpenSearch for semantic caching. 
    ![Amazon-Bedrock-Semantic-Cache](genai-quickstart-pocs-python/amazon-bedrock-semantic-cache-poc-main/image/SemanticCache.gif)
35. **Amazon-Bedrock-PowerPoint-Generator**
    This is sample code demonstrates the use of Amazon Bedrock and Generative AI to implement a PowerPoint generator. The application is constructed with a simple streamlit frontend where users can input a topic and get a PowerPoint generated based on the topic. Using Generative AI, the solution creates relevant Wikipedia queries to perform in-depth research on the presentation content.
    ![Amazon-Bedrock-PowerPoint-Generator](genai-quickstart-pocs-python/amazon-bedrock-powerpoint-generator-poc/images/demo.gif)
36. **Amazon-Bedrock-Intelligent-Document-Processing:**
    This is sample code demonstrating the use of Amazon Bedrock and Generative AI incorporated into an Intelligent Document Processing (IDP) pipeline using user-uploaded documents. The application is constructed with a simple streamlit frontend where users can upload various document formats and perform different IDP actions such as text extraction, document summarization and classification, entity recognition, and Q&A to satisfy a broad range of use cases.
    ![Amazon-Bedrock-PowerPoint-Generator](genai-quickstart-pocs-python/amazon-bedrock-intelligent-document-processing-poc/images/demo.gif)
37. **Amazon-Bedrock-Quiz-Generator-POC**
    This is sample code demonstrates the use of Amazon Bedrock and Generative AI to implement a Quiz Generator. The application is constructed with a simple streamlit frontend where users can upload one or more documents (`.pdf`, `.docx`, `.doc`, `.csv`, `.md`, `.png`, `.jpg`) and generate a quiz with anywhere from 5 to 100 questions (multi-choice / true or false).
    ![Amazon-Bedrock-Quiz-Generator](genai-quickstart-pocs-python/amazon-bedrock-quiz-generator-poc/images/demo.gif)





## Sample Proof of Concepts - .NET

1. **Amazon-Bedrock-Summarization-Long-Document-POC:**
   Amazon-Bedrock-Document-Generator: This sample demonstrates using Amazon Bedrock and Generative AI to perform document generation based on a document template and user-provided details.
   ![Amazon Bedrock Document Generator](genai-quickstart-pocs-dot-net/images/text-generation.png)
2. **Amazon-Bedrock-Knowledgebases-RAG-POC:**
   This sample implements a RAG-based architecture with Amazon Bedrock Knowledge Bases, allowing users to ask questions against documents stored in an Amazon Bedrock Knowledge Base using Amazon Bedrock.
   ![Amazon Bedrock Knowledgebases RAG](genai-quickstart-pocs-dot-net/images/rag-with-kb.png)
3. **Amazon-Bedrock-Kendra-RAG-POC:** 
    This sample implements a RAG-based architecture with Amazon Kendra, allowing users to ask questions against documents stored in a Kendra index and allowing users to do q&a using Amazon Bedrock models.
    ![Amazon-Bedrock-Kendra-RAG](genai-quickstart-pocs-dot-net/images/rag-with-kendra.png "RAG with Kendra")
4. **Amazon-Bedrock-Converse-API-POC:**   
   This is sample code demonstrating the use of the Amazon Bedrock Converse API to create conversational applications that send and receive messages to and from an Amazon Bedrock mod  l  
   ![Amazon-Bedrock-Converse-API](genai-quickstart-pocs-dot-net/images/Bedrock-Converse-dot-net.gif "Converse API")	
5. **Amazon-Bedrock-Guardrails-POC:**
    This is sample code demonstrating the use of Amazon Bedrock Guardrails to help prevent prompt-injection attacks and prevent unintended responses from the LLM. The application is constructed with a simple ASP.NET         Blazor frontend where users can input zero shot requests to Claude 3, with Amazon Bedrock Guardrails in place to prevent malicious prompts and responses.
   ![Amazon-Bedrock-Guardrails-POC](genai-quickstart-pocs-dot-net/images/bedrock-guardrail-poc.gif)    

## Prerequisites - Python

- Amazon Bedrock Access and CLI Credentials
- Python 3.10 installed on your machine
- Additional prerequisites specific to each sample (e.g., RDS Database, Amazon Kendra index, etc.)

## Prerequisites - .NET

- Amazon Bedrock Access and CLI Credentials (Please ensure your AWS CLI Profile has access to Amazon Bedrock!)
- .NET 8.0
- Visual Studio installed on your machine
- Additional prerequisites specific to each sample (e.g., RDS Database, Amazon Kendra index, etc.)
- Configure the necessary environment variables (e.g., AWS credentials, database connections, etc.).
- Access to Claude 3 haiku model. Please follow this [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html) to get access to the model.
- Run Blazor app

## Getting Started

1. Clone the repository.
2. Navigate to the desired sample directory.
3. Set up a Python virtual environment and install the required dependencies.
4. Configure the necessary environment variables (e.g., AWS credentials, database connections, etc.).
5. Run the Streamlit application using the provided command.

Detailed instructions for each sample are provided in their respective directories.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
