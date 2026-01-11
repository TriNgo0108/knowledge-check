import { Question } from '@/data/types';

const questions: Question[] = [
  // ============ BEGINNER (1-35) ============
  {
    id: 1,
    question: "What does AWS stand for?",
    options: ["Amazon Web Services", "Advanced Web Systems", "Amazon Wide Storage", "Application Web Services"],
    answer: "Amazon Web Services",
    explanation: "AWS stands for Amazon Web Services, the leading cloud computing platform."
  },
  {
    id: 2,
    question: "What is an AWS Region?",
    options: ["A single data center", "A geographic area with multiple data centers", "A virtual network", "A type of server"],
    answer: "A geographic area with multiple data centers",
    explanation: "A Region is a physical location with multiple Availability Zones."
  },
  {
    id: 3,
    question: "What is an Availability Zone (AZ)?",
    options: ["A timing zone", "One or more data centers with redundant power/networking", "A pricing tier", "A security zone"],
    answer: "One or more data centers with redundant power/networking",
    explanation: "AZs are isolated locations within a Region for fault tolerance."
  },
  {
    id: 4,
    question: "Which AWS service provides virtual servers?",
    options: ["S3", "EC2", "RDS", "Lambda"],
    answer: "EC2",
    explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual servers."
  },
  {
    id: 5,
    question: "What is Amazon S3 used for?",
    options: ["Database storage", "Object storage", "Virtual machines", "DNS management"],
    answer: "Object storage",
    explanation: "S3 (Simple Storage Service) stores files as objects in buckets."
  },
  {
    id: 6,
    question: "Which service manages user access and permissions?",
    options: ["EC2", "IAM", "VPC", "S3"],
    answer: "IAM",
    explanation: "IAM (Identity and Access Management) controls who can access AWS resources."
  },
  {
    id: 7,
    question: "What is an IAM Policy?",
    options: ["User password", "JSON document defining permissions", "Network rule", "Server configuration"],
    answer: "JSON document defining permissions",
    explanation: "IAM Policies are JSON documents that define what actions are allowed or denied."
  },
  {
    id: 8,
    question: "What does VPC stand for?",
    options: ["Virtual Private Cloud", "Virtual Public Connection", "Very Private Computer", "Virtual Processing Center"],
    answer: "Virtual Private Cloud",
    explanation: "VPC is a logically isolated virtual network in AWS."
  },
  {
    id: 9,
    question: "Which AWS database service is fully managed?",
    options: ["EC2 with MySQL", "RDS", "S3", "DynamoDB and RDS"],
    answer: "DynamoDB and RDS",
    explanation: "Both RDS (relational) and DynamoDB (NoSQL) are fully managed database services."
  },
  {
    id: 10,
    question: "What is Amazon RDS?",
    options: ["File storage", "Managed relational database service", "Virtual server", "CDN service"],
    answer: "Managed relational database service",
    explanation: "RDS manages MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB databases."
  },
  {
    id: 11,
    question: "Which service runs code without provisioning servers?",
    options: ["EC2", "ECS", "Lambda", "Lightsail"],
    answer: "Lambda",
    explanation: "Lambda is a serverless compute service that runs code in response to events."
  },
  {
    id: 12,
    question: "What is an S3 bucket?",
    options: ["Type of server", "Container for storing objects", "Database table", "Network gateway"],
    answer: "Container for storing objects",
    explanation: "S3 buckets are containers that hold objects (files and metadata)."
  },
  {
    id: 13,
    question: "What is the AWS Free Tier?",
    options: ["Free forever services", "Limited free usage for 12 months", "Free security tier", "Free networking"],
    answer: "Limited free usage for 12 months",
    explanation: "Free Tier offers limited free usage of many services for 12 months."
  },
  {
    id: 14,
    question: "Which service distributes content globally?",
    options: ["S3", "CloudFront", "VPC", "EC2"],
    answer: "CloudFront",
    explanation: "CloudFront is a CDN that caches content at edge locations worldwide."
  },
  {
    id: 15,
    question: "What is an EC2 instance?",
    options: ["Physical server", "Virtual server in the cloud", "Database", "Storage bucket"],
    answer: "Virtual server in the cloud",
    explanation: "An instance is a virtual server running in AWS cloud."
  },
  {
    id: 16,
    question: "Which service provides DNS management?",
    options: ["CloudFront", "Route 53", "VPC", "ELB"],
    answer: "Route 53",
    explanation: "Route 53 is AWS's DNS web service for domain registration and routing."
  },
  {
    id: 17,
    question: "What is an AMI?",
    options: ["Amazon Machine Image", "AWS Mobile Interface", "Amazon Migration Initiative", "AWS Managed Instance"],
    answer: "Amazon Machine Image",
    explanation: "AMI is a template containing software configuration to launch EC2 instances."
  },
  {
    id: 18,
    question: "Which storage type is block-level for EC2?",
    options: ["S3", "EBS", "EFS", "Glacier"],
    answer: "EBS",
    explanation: "EBS (Elastic Block Store) provides block storage volumes for EC2."
  },
  {
    id: 19,
    question: "What is a security group?",
    options: ["IAM user group", "Virtual firewall for EC2 instances", "VPC subnet", "S3 access control"],
    answer: "Virtual firewall for EC2 instances",
    explanation: "Security groups control inbound and outbound traffic to instances."
  },
  {
    id: 20,
    question: "What is Elastic Load Balancing?",
    options: ["Auto scaling", "Distributing traffic across targets", "Database replication", "Storage balancing"],
    answer: "Distributing traffic across targets",
    explanation: "ELB automatically distributes incoming traffic across multiple targets."
  },
  {
    id: 21,
    question: "Which type of ELB operates at layer 7 (HTTP/HTTPS)?",
    options: ["Network Load Balancer", "Application Load Balancer", "Classic Load Balancer", "Gateway Load Balancer"],
    answer: "Application Load Balancer",
    explanation: "ALB operates at the application layer with advanced routing capabilities."
  },
  {
    id: 22,
    question: "What is Auto Scaling?",
    options: ["Manual scaling", "Automatically adjusting capacity based on demand", "Storage expansion", "Database sizing"],
    answer: "Automatically adjusting capacity based on demand",
    explanation: "Auto Scaling automatically adds or removes instances based on conditions."
  },
  {
    id: 23,
    question: "Which service provides NoSQL database?",
    options: ["RDS", "DynamoDB", "Aurora", "Redshift"],
    answer: "DynamoDB",
    explanation: "DynamoDB is a fully managed NoSQL key-value and document database."
  },
  {
    id: 24,
    question: "What is Amazon CloudWatch?",
    options: ["Security monitoring", "Monitoring and observability service", "Time service", "Video streaming"],
    answer: "Monitoring and observability service",
    explanation: "CloudWatch monitors AWS resources and applications with metrics and logs."
  },
  {
    id: 25,
    question: "What is the difference between public and private subnets?",
    options: ["No difference", "Public has internet access, private doesn't", "Private is slower", "Public is free"],
    answer: "Public has internet access, private doesn't",
    explanation: "Public subnets route to an Internet Gateway; private subnets don't."
  },
  {
    id: 26,
    question: "What is an Internet Gateway?",
    options: ["Firewall", "Component allowing VPC internet access", "Load balancer", "DNS server"],
    answer: "Component allowing VPC internet access",
    explanation: "Internet Gateway enables communication between VPC and the internet."
  },
  {
    id: 27,
    question: "Which service is for sending emails?",
    options: ["SNS", "SES", "SQS", "SMS"],
    answer: "SES",
    explanation: "SES (Simple Email Service) is for sending and receiving email."
  },
  {
    id: 28,
    question: "What is Amazon SNS?",
    options: ["Storage service", "Pub/sub messaging service", "Email service", "Streaming service"],
    answer: "Pub/sub messaging service",
    explanation: "SNS (Simple Notification Service) is for pub/sub messaging and mobile notifications."
  },
  {
    id: 29,
    question: "What is Amazon SQS?",
    options: ["Database service", "Message queuing service", "Storage service", "Compute service"],
    answer: "Message queuing service",
    explanation: "SQS (Simple Queue Service) is a fully managed message queuing service."
  },
  {
    id: 30,
    question: "What are EC2 instance types based on?",
    options: ["Location", "CPU, memory, storage, and networking capacity", "Price only", "Operating system"],
    answer: "CPU, memory, storage, and networking capacity",
    explanation: "Instance types (t2, m5, c5, etc.) are optimized for different workloads."
  },
  {
    id: 31,
    question: "What is an Elastic IP?",
    options: ["Dynamic IP", "Static public IP address for EC2", "Private IP", "VPC IP range"],
    answer: "Static public IP address for EC2",
    explanation: "Elastic IP is a static IPv4 address designed for dynamic cloud computing."
  },
  {
    id: 32,
    question: "Which service stores secrets securely?",
    options: ["S3", "Secrets Manager", "IAM", "KMS"],
    answer: "Secrets Manager",
    explanation: "Secrets Manager stores, rotates, and retrieves database credentials and API keys."
  },
  {
    id: 33,
    question: "What is AWS KMS?",
    options: ["Kubernetes Management", "Key Management Service", "Kinesis Management", "Knowledge Management"],
    answer: "Key Management Service",
    explanation: "KMS manages encryption keys for securing data."
  },
  {
    id: 34,
    question: "What is the AWS shared responsibility model?",
    options: ["AWS handles everything", "Customer handles everything", "AWS secures infrastructure, customer secures data", "Split by region"],
    answer: "AWS secures infrastructure, customer secures data",
    explanation: "AWS manages security OF the cloud; customers manage security IN the cloud."
  },
  {
    id: 35,
    question: "What is S3 storage class for infrequent access?",
    options: ["S3 Standard", "S3-IA", "S3 Glacier", "S3 One Zone"],
    answer: "S3-IA",
    explanation: "S3 Standard-IA (Infrequent Access) is for data accessed less frequently."
  },

  // ============ INTERMEDIATE (36-70) ============
  {
    id: 36,
    question: "What is the difference between S3 IA and Glacier?",
    options: ["Same thing", "IA for minutes access, Glacier for hours", "Glacier is more expensive", "IA is for backups only"],
    answer: "IA for minutes access, Glacier for hours",
    explanation: "S3 IA has faster retrieval; Glacier is for archival with hours retrieval time."
  },
  {
    id: 37,
    question: "What is a NAT Gateway used for?",
    options: ["Public internet access", "Private subnet internet access (outbound)", "VPN connection", "DNS resolution"],
    answer: "Private subnet internet access (outbound)",
    explanation: "NAT Gateway allows private instances to access internet while staying private."
  },
  {
    id: 38,
    question: "What is AWS CloudFormation?",
    options: ["Cloud storage", "Infrastructure as Code service", "Monitoring service", "Security service"],
    answer: "Infrastructure as Code service",
    explanation: "CloudFormation provisions AWS resources using templates (IaC)."
  },
  {
    id: 39,
    question: "What is an IAM Role?",
    options: ["User account", "Set of permissions assumable by services/users", "Group of users", "Policy document"],
    answer: "Set of permissions assumable by services/users",
    explanation: "Roles provide temporary permissions and can be assumed by services or users."
  },
  {
    id: 40,
    question: "When should you use IAM Roles vs IAM Users?",
    options: ["Always use Users", "Roles for services, Users for humans", "Same thing", "Roles are deprecated"],
    answer: "Roles for services, Users for humans",
    explanation: "Use Roles for AWS services and federated access; Users for individual humans."
  },
  {
    id: 41,
    question: "What is Amazon ECS?",
    options: ["Email service", "Elastic Container Service", "EC2 Cluster", "Encryption service"],
    answer: "Elastic Container Service",
    explanation: "ECS is a container orchestration service for running Docker containers."
  },
  {
    id: 42,
    question: "What is the difference between ECS and EKS?",
    options: ["Same service", "ECS is AWS-native, EKS is Kubernetes", "EKS is cheaper", "ECS is deprecated"],
    answer: "ECS is AWS-native, EKS is Kubernetes",
    explanation: "ECS uses AWS's orchestration; EKS runs managed Kubernetes."
  },
  {
    id: 43,
    question: "What is AWS Fargate?",
    options: ["Storage service", "Serverless compute for containers", "Database", "Networking"],
    answer: "Serverless compute for containers",
    explanation: "Fargate runs containers without managing servers for ECS or EKS."
  },
  {
    id: 44,
    question: "What is Amazon Aurora?",
    options: ["NoSQL database", "MySQL/PostgreSQL-compatible managed database", "Data warehouse", "In-memory cache"],
    answer: "MySQL/PostgreSQL-compatible managed database",
    explanation: "Aurora is a cloud-native relational database compatible with MySQL and PostgreSQL."
  },
  {
    id: 45,
    question: "What is Amazon Redshift?",
    options: ["Shift management", "Data warehouse for analytics", "Redis cache", "Routing service"],
    answer: "Data warehouse for analytics",
    explanation: "Redshift is a fully managed data warehouse for large-scale analytics."
  },
  {
    id: 46,
    question: "What is Amazon ElastiCache?",
    options: ["CDN", "In-memory caching service (Redis/Memcached)", "Storage cache", "Database backup"],
    answer: "In-memory caching service (Redis/Memcached)",
    explanation: "ElastiCache provides managed Redis or Memcached for caching."
  },
  {
    id: 47,
    question: "What is VPC Peering?",
    options: ["VPN connection", "Connecting two VPCs privately", "Internet connection", "Database link"],
    answer: "Connecting two VPCs privately",
    explanation: "VPC Peering enables private connectivity between two VPCs."
  },
  {
    id: 48,
    question: "What is AWS Transit Gateway?",
    options: ["Airport service", "Hub connecting VPCs and on-premises networks", "API Gateway", "Payment gateway"],
    answer: "Hub connecting VPCs and on-premises networks",
    explanation: "Transit Gateway simplifies connecting multiple VPCs and on-premises networks."
  },
  {
    id: 49,
    question: "What is Amazon API Gateway?",
    options: ["VPN gateway", "Create and manage APIs at scale", "Network gateway", "Payment gateway"],
    answer: "Create and manage APIs at scale",
    explanation: "API Gateway creates, publishes, and secures RESTful and WebSocket APIs."
  },
  {
    id: 50,
    question: "What is AWS Step Functions?",
    options: ["Exercise tracking", "Serverless orchestration of Lambda functions", "Step-by-step tutorials", "Deployment steps"],
    answer: "Serverless orchestration of Lambda functions",
    explanation: "Step Functions coordinates multiple AWS services into serverless workflows."
  },
  {
    id: 51,
    question: "What are Reserved Instances?",
    options: ["Backup instances", "Discounted capacity with commitment", "Development instances", "Free tier instances"],
    answer: "Discounted capacity with commitment",
    explanation: "Reserved Instances offer up to 72% discount with 1 or 3-year commitment."
  },
  {
    id: 52,
    question: "What are Spot Instances?",
    options: ["Instant launch", "Unused capacity at up to 90% discount", "Dedicated instances", "Premium instances"],
    answer: "Unused capacity at up to 90% discount",
    explanation: "Spot Instances use spare EC2 capacity at steep discounts but can be interrupted."
  },
  {
    id: 53,
    question: "What is Amazon EFS?",
    options: ["Email File Service", "Elastic File System (NFS)", "Encrypted File Storage", "External File System"],
    answer: "Elastic File System (NFS)",
    explanation: "EFS provides scalable NFS file storage for EC2 instances."
  },
  {
    id: 54,
    question: "What is the difference between EBS and EFS?",
    options: ["Same service", "EBS is block storage for one instance, EFS is file storage for many", "EFS is cheaper", "EBS is deprecated"],
    answer: "EBS is block storage for one instance, EFS is file storage for many",
    explanation: "EBS attaches to one instance; EFS can be mounted by multiple instances."
  },
  {
    id: 55,
    question: "What is AWS CodePipeline?",
    options: ["Data pipeline", "Continuous delivery service", "Network pipeline", "Log pipeline"],
    answer: "Continuous delivery service",
    explanation: "CodePipeline automates build, test, and deploy phases of release."
  },
  {
    id: 56,
    question: "What is AWS CodeBuild?",
    options: ["Infrastructure builder", "Continuous integration build service", "Code generator", "AMI builder"],
    answer: "Continuous integration build service",
    explanation: "CodeBuild compiles source code, runs tests, and produces deployable artifacts."
  },
  {
    id: 57,
    question: "What is AWS CodeDeploy?",
    options: ["Storage deployment", "Automated application deployment service", "Database deploy", "Network deploy"],
    answer: "Automated application deployment service",
    explanation: "CodeDeploy automates deployments to EC2, Lambda, and on-premises servers."
  },
  {
    id: 58,
    question: "What is an ACL in S3?",
    options: ["Access Control List for permissions", "Automatic Content Loading", "Application Control Layer", "AWS Certificate List"],
    answer: "Access Control List for permissions",
    explanation: "ACLs define who can access S3 objects (legacy, prefer bucket policies)."
  },
  {
    id: 59,
    question: "What is S3 versioning?",
    options: ["API versioning", "Keeping multiple versions of objects", "Code versioning", "Schema versioning"],
    answer: "Keeping multiple versions of objects",
    explanation: "Versioning preserves all versions of objects for recovery and audit."
  },
  {
    id: 60,
    question: "What is an S3 lifecycle policy?",
    options: ["Object lifespan tracking", "Automatic transitions between storage classes", "Bucket creation", "Access logging"],
    answer: "Automatic transitions between storage classes",
    explanation: "Lifecycle policies automate transitioning or deleting objects over time."
  },
  {
    id: 61,
    question: "What is AWS Organizations?",
    options: ["Company directory", "Manage multiple AWS accounts centrally", "User groups", "Role organization"],
    answer: "Manage multiple AWS accounts centrally",
    explanation: "Organizations manages multiple accounts with consolidated billing and policies."
  },
  {
    id: 62,
    question: "What is a Service Control Policy (SCP)?",
    options: ["IAM policy", "Organization-level policy limiting account permissions", "Network policy", "S3 policy"],
    answer: "Organization-level policy limiting account permissions",
    explanation: "SCPs set permission guardrails for all accounts in an organization."
  },
  {
    id: 63,
    question: "What is Amazon Kinesis?",
    options: ["Exercise service", "Real-time data streaming", "Kubernetes service", "Key management"],
    answer: "Real-time data streaming",
    explanation: "Kinesis collects, processes, and analyzes streaming data in real time."
  },
  {
    id: 64,
    question: "What is Amazon EMR?",
    options: ["Email Reports", "Elastic MapReduce for big data", "Event Management", "Error Monitoring"],
    answer: "Elastic MapReduce for big data",
    explanation: "EMR runs big data frameworks like Spark, Hadoop, and Presto."
  },
  {
    id: 65,
    question: "What is AWS Glue?",
    options: ["Adhesive service", "Serverless ETL service", "Database connector", "API connector"],
    answer: "Serverless ETL service",
    explanation: "Glue is a serverless data integration service for ETL jobs."
  },
  {
    id: 66,
    question: "What is Amazon Athena?",
    options: ["Goddess service", "Query S3 data with SQL", "Database service", "Analytics dashboard"],
    answer: "Query S3 data with SQL",
    explanation: "Athena runs SQL queries directly against S3 data without loading it."
  },
  {
    id: 67,
    question: "What is AWS WAF?",
    options: ["Web Access Firewall", "Web Application Firewall", "Wide Area Firewall", "Workload Application Filter"],
    answer: "Web Application Firewall",
    explanation: "WAF protects web applications from common exploits like SQL injection."
  },
  {
    id: 68,
    question: "What is AWS Shield?",
    options: ["S3 protection", "DDoS protection service", "Encryption service", "Backup service"],
    answer: "DDoS protection service",
    explanation: "Shield provides DDoS protection for AWS applications."
  },
  {
    id: 69,
    question: "What is the difference between Shield Standard and Shield Advanced?",
    options: ["Same protection", "Advanced has more features, 24/7 support, cost protection", "Standard is paid", "Advanced is free"],
    answer: "Advanced has more features, 24/7 support, cost protection",
    explanation: "Shield Advanced adds enhanced detection, mitigation, and AWS DDoS Response Team."
  },
  {
    id: 70,
    question: "What is Amazon GuardDuty?",
    options: ["Security guard service", "Threat detection service using ML", "Password manager", "Access control"],
    answer: "Threat detection service using ML",
    explanation: "GuardDuty uses ML to detect threats across AWS accounts."
  },

  // ============ ADVANCED (71-100) ============
  {
    id: 71,
    question: "What is AWS PrivateLink?",
    options: ["VPN service", "Private connectivity to AWS services without internet", "Private S3", "Private EC2"],
    answer: "Private connectivity to AWS services without internet",
    explanation: "PrivateLink provides private connectivity to services without traversing internet."
  },
  {
    id: 72,
    question: "What is a VPC Endpoint?",
    options: ["VPC termination", "Private connection to AWS services from VPC", "Public gateway", "NAT replacement"],
    answer: "Private connection to AWS services from VPC",
    explanation: "VPC Endpoints enable private access to AWS services without internet."
  },
  {
    id: 73,
    question: "What is the difference between Gateway and Interface endpoints?",
    options: ["Same thing", "Gateway for S3/DynamoDB, Interface for other services", "Interface is deprecated", "Gateway is newer"],
    answer: "Gateway for S3/DynamoDB, Interface for other services",
    explanation: "Gateway endpoints are free for S3/DynamoDB; Interface endpoints use ENIs."
  },
  {
    id: 74,
    question: "What is AWS Config?",
    options: ["Configuration files", "Track resource configurations and compliance", "Server config", "Network config"],
    answer: "Track resource configurations and compliance",
    explanation: "Config records configurations and evaluates them against rules."
  },
  {
    id: 75,
    question: "What is AWS CloudTrail?",
    options: ["Hiking service", "API activity logging and auditing", "Cloud monitoring", "Trail migration"],
    answer: "API activity logging and auditing",
    explanation: "CloudTrail logs API calls for governance, compliance, and auditing."
  },
  {
    id: 76,
    question: "What is the difference between CloudWatch Logs and CloudTrail?",
    options: ["Same service", "CloudWatch for app logs, CloudTrail for API calls", "CloudTrail is deprecated", "CloudWatch is newer"],
    answer: "CloudWatch for app logs, CloudTrail for API calls",
    explanation: "CloudWatch Logs stores application logs; CloudTrail logs AWS API activity."
  },
  {
    id: 77,
    question: "What is Amazon Inspector?",
    options: ["Code review", "Automated security assessment for EC2/containers", "Cost inspection", "Performance analysis"],
    answer: "Automated security assessment for EC2/containers",
    explanation: "Inspector automatically discovers vulnerabilities in workloads."
  },
  {
    id: 78,
    question: "What is AWS Systems Manager?",
    options: ["Operating system", "Manage and configure AWS resources at scale", "File manager", "Database manager"],
    answer: "Manage and configure AWS resources at scale",
    explanation: "Systems Manager provides operational insights and resource management."
  },
  {
    id: 79,
    question: "What is Parameter Store in Systems Manager?",
    options: ["Storage pricing", "Secure hierarchical storage for configuration data", "Parameter tuning", "Instance parameters"],
    answer: "Secure hierarchical storage for configuration data",
    explanation: "Parameter Store manages secrets and configuration data securely."
  },
  {
    id: 80,
    question: "What is Amazon EventBridge?",
    options: ["Event venue", "Serverless event bus for application integration", "Bridge networking", "Event storage"],
    answer: "Serverless event bus for application integration",
    explanation: "EventBridge routes events between AWS services and applications."
  },
  {
    id: 81,
    question: "What is the Well-Architected Framework?",
    options: ["Building blueprints", "Best practices for cloud architecture", "Network architecture", "Database design"],
    answer: "Best practices for cloud architecture",
    explanation: "The Well-Architected Framework provides architectural best practices across 6 pillars."
  },
  {
    id: 82,
    question: "What are the 6 pillars of Well-Architected Framework?",
    options: ["Speed, Cost, Security", "Operational Excellence, Security, Reliability, Performance, Cost, Sustainability", "Design, Build, Deploy", "Plan, Execute, Monitor"],
    answer: "Operational Excellence, Security, Reliability, Performance, Cost, Sustainability",
    explanation: "The 6 pillars guide building secure, high-performing, resilient infrastructure."
  },
  {
    id: 83,
    question: "What is AWS Backup?",
    options: ["Backup service", "Centralized backup across AWS services", "EC2 snapshots only", "S3 backups"],
    answer: "Centralized backup across AWS services",
    explanation: "AWS Backup centralizes and automates backup across AWS services."
  },
  {
    id: 84,
    question: "What is Amazon Macie?",
    options: ["AI assistant", "Sensitive data discovery and protection in S3", "Database service", "Compute service"],
    answer: "Sensitive data discovery and protection in S3",
    explanation: "Macie uses ML to discover and protect sensitive data in S3."
  },
  {
    id: 85,
    question: "What is AWS X-Ray?",
    options: ["Medical imaging", "Distributed tracing for debugging", "Security scanning", "Log analysis"],
    answer: "Distributed tracing for debugging",
    explanation: "X-Ray traces requests through distributed applications for debugging."
  },
  {
    id: 86,
    question: "What is Amazon SageMaker?",
    options: ["Sage burning", "Build, train, and deploy ML models", "Data analysis", "Database sage"],
    answer: "Build, train, and deploy ML models",
    explanation: "SageMaker is a fully managed service for machine learning workflows."
  },
  {
    id: 87,
    question: "What is AWS Lambda's maximum execution time?",
    options: ["5 minutes", "15 minutes", "30 minutes", "1 hour"],
    answer: "15 minutes",
    explanation: "Lambda functions can run for a maximum of 15 minutes (900 seconds)."
  },
  {
    id: 88,
    question: "What is Lambda@Edge?",
    options: ["Edge computing", "Run Lambda at CloudFront edge locations", "Lambda for IoT", "Mobile Lambda"],
    answer: "Run Lambda at CloudFront edge locations",
    explanation: "Lambda@Edge runs code at CloudFront edge locations for low latency."
  },
  {
    id: 89,
    question: "What is Amazon Cognito?",
    options: ["Brain training", "User authentication and authorization", "Database service", "AI service"],
    answer: "User authentication and authorization",
    explanation: "Cognito provides user sign-up, sign-in, and access control."
  },
  {
    id: 90,
    question: "What is the difference between Cognito User Pools and Identity Pools?",
    options: ["Same thing", "User Pools for auth, Identity Pools for AWS credentials", "Identity Pools is deprecated", "User Pools for AWS access"],
    answer: "User Pools for auth, Identity Pools for AWS credentials",
    explanation: "User Pools handle authentication; Identity Pools provide AWS credentials."
  },
  {
    id: 91,
    question: "What is AWS Direct Connect?",
    options: ["VPN", "Dedicated network connection to AWS", "Internet connection", "VPC connection"],
    answer: "Dedicated network connection to AWS",
    explanation: "Direct Connect provides a dedicated private connection from on-premises to AWS."
  },
  {
    id: 92,
    question: "What is Amazon Global Accelerator?",
    options: ["Car service", "Improve application availability and performance globally", "CDN", "Database accelerator"],
    answer: "Improve application availability and performance globally",
    explanation: "Global Accelerator uses AWS global network to optimize application routing."
  },
  {
    id: 93,
    question: "What is AWS Control Tower?",
    options: ["Air traffic control", "Set up and govern multi-account AWS environment", "EC2 management", "Database control"],
    answer: "Set up and govern multi-account AWS environment",
    explanation: "Control Tower automates setup and governance of a secure multi-account environment."
  },
  {
    id: 94,
    question: "What is AWS Lake Formation?",
    options: ["Lake building", "Build and manage data lakes", "Water management", "Storage formation"],
    answer: "Build and manage data lakes",
    explanation: "Lake Formation simplifies building, securing, and managing data lakes."
  },
  {
    id: 95,
    question: "What is Amazon FSx?",
    options: ["File sharing", "Fully managed file systems (Windows/Lustre)", "FTP service", "File sync"],
    answer: "Fully managed file systems (Windows/Lustre)",
    explanation: "FSx provides managed Windows File Server and Lustre file systems."
  },
  {
    id: 96,
    question: "What is AWS App Mesh?",
    options: ["Application network", "Service mesh for microservices", "Networking mesh", "Container mesh"],
    answer: "Service mesh for microservices",
    explanation: "App Mesh provides application-level networking for microservices."
  },
  {
    id: 97,
    question: "What is Amazon CloudSearch?",
    options: ["Web search", "Managed search service", "File search", "Log search"],
    answer: "Managed search service",
    explanation: "CloudSearch is a managed service for setting up search solutions."
  },
  {
    id: 98,
    question: "What is the AWS CDK?",
    options: ["Content Delivery Kit", "Cloud Development Kit for IaC with programming languages", "Compute Development", "Container Development Kit"],
    answer: "Cloud Development Kit for IaC with programming languages",
    explanation: "CDK lets you define cloud infrastructure using familiar programming languages."
  },
  {
    id: 99,
    question: "What is AWS SAM?",
    options: ["System Administration Module", "Serverless Application Model", "Security Access Management", "Storage Access Module"],
    answer: "Serverless Application Model",
    explanation: "SAM is a framework for building serverless applications."
  },
  {
    id: 100,
    question: "What is AWS Outposts?",
    options: ["Remote offices", "AWS infrastructure on-premises", "Edge locations", "Backup sites"],
    answer: "AWS infrastructure on-premises",
    explanation: "Outposts extends AWS infrastructure and services to on-premises locations."
  }
];

export default questions;
