# full-stack File Management System with AWS S3 application
This project is a full-stack File Management System that allows users to upload, download, and manage files with integration to AWS S3 for file storage. The front-end is built with ReactJS and the back-end is powered by Spring Boot.
## Features
- **Image Upload**: Users can upload images (jpg) through a file input.
- **Image Storage**: The image is uploaded to AWS S3 and stored with a URL.
- **Product Entity**: Image URLs are stored in the `Product` entity in the database.
- **Image Retrieval**: Users can view a list of products with their respective images retrieved from S3.
# Prerequisites
Before you start, ensure you have the following installed:

- Node.js (for React)
- Java 11+ (for Spring Boot)
- Maven or Gradle (for Spring Boot)
- AWS Account (for AWS S3 setup)
# Deploy site on netlify
Project Url :https://awss3imageupload.netlify.app/uploadto-AWS
## Frontend(ReactJs)

- Html
- Css
- Bootstrap
- Javascrip
- ReactJs

## Backend(Spring Boot)
- JDBC Servlets
- Hibernate ORM
- Spring Data Jpa
- File Storage: AWS S3
- Spring Boot
- MySql Database
- post man
## Screenshots
# 
# Input Form Page (Product Image Upload)
The Product Image Upload page allows users to upload product images to the system, which are stored on AWS S3. These images are then linked to the product details and saved to the database. The form accepts image files in .jpg format and limits the file size to 1MB.
![register](https://github.com/bhaskar-nayak/E-commerce-full-stack-application/blob/master/Screenshot%20(8).png?raw=true)
## How It Works
- Step 1: User selects a .jpg image file from the file input.
- Step 2: User clicks Upload to submit the form.
- The image is sent to the Spring Boot back-end, which validates the file type and size.
- The image is uploaded to AWS S3, and the URL is returned.
- The URL is then saved in the database alongside the product's name and price.

# Image Rendering on the Images Page
After the product image is uploaded and the product details are saved to the database, the images can be viewed on the Images Page using the List Images endpoint. The images are retrieved from the AWS S3 bucket by their stored URL, which is associated with each product in the database
![login](https://github.com/bhaskar-nayak/E-commerce-full-stack-application/blob/master/Screenshot%20(7).png?raw=true)
# Endpoints:
Add Product (POST /v1/imageProduct/add-products): Uploads the product image to AWS S3 and stores the image URL with the product details in the database.
List Products (GET /v1/imageProduct/list-products): Retrieves all products along with their image URLs and displays them on the Images Page.
