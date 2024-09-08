"use client";
import React, { useEffect } from "react";
import Card from "../components/Card/Card.jsx";
import SmallCard from "../components/Card/SmallCard.jsx";
import "./Body.css";

function Body() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view");
          } else if (
            entry.boundingClientRect.y < 0 ||
            entry.boundingClientRect.y > window.innerHeight / 2
          ) {
            entry.target.classList.add("out-of-view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: [0.5] }
    );

    const cards = document.querySelectorAll(
      ".card, .small-card.left, .small-card.right"
    );
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (cards) {
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div className="body-wrapper1">
      <div className="body1">
        <h1 className="title1">Projects</h1>
        <div className="cards-container">
          <Card
            title="Cloud Translatify"
            content={`Developed a web application that converts spoken speech into its appropriate translation text and vocalizes the translated output.
                      Utilized a variety of AWS services including Lambda, API Gateway, S3, DynamoDB, Codecommit, Cloudwatch, Amazon Translate, Amazon Polly.`}
            imageSrc="images/3.png"
            imageDirection="left"
          />
          <Card
            title="Demand Paging Simulator"
            content={`Developed a memory management technique to optimize the utilization of RAM.
                      Demand paging has the following components: TLB, Page Map, RAM, and Secondary Storage.
                      Implemented a page replacement algorithm (FIFO) if the TLB is full.`}
            imageSrc="images/demandPagingMain-2.jpg"
            imageDirection="right"
          />
          <Card
            title="Traffic Tweets"
            content={`Developed a full-stack microservice application enabling users to communicate with others stuck in heavy traffic at the same signal.\nUsers are assigned to chat rooms based on their geolocation.`}
            imageSrc="images/4.png"
            imageDirection="left"
          />
          <Card
            title="Image Filtering and Edge Detection"
            content={`Implemented image processing techniques including Gaussian blur, image sharpening, edge detection using Sobel filters, and bilateral blurring.
                      Upsampled the image 4 times in each direction with nearest neighbor and bilateral interpolation techniques.
                      Developed optimized approaches such as separable filters for Gaussian blur to reduce computational costs.`}
            imageSrc="images/6.png"
            imageDirection="right"
          />
          <div className="small-cards-group">
            <SmallCard
              title="Cloud-Based Document Processing and Management System"
              content={`Developed a React application to handle document uploads, which sends the files to S3 and stores their paths and inputs in DynamoDB via API Gateway and Lambda.
                        Deployed an EC2 instance that retrieves S3 file and input text from DynamoDB, downloads the file, processes it by appending the length of the text to the file, saves it back to S3 with a new name, and updates the DynamoDB with the new S3 file location.
                        Managed and deployed all AWS infrastructure using AWS CDK.`}
              imageSrc="images/doc-2.png"
              position="left"
            />
            <SmallCard
              title="Command Line Shell"
              content={`Developed a command execution environment, allowing users to interact with the shell.
                        Implemented input/output redirection, piping functionalities.
                        Developed a directory stack, using the stack data structure. It keeps track of the directories visited, allowing to easily switch back and forth between them.`}
              imageSrc="images/nb.png"
              position="right"
            />
          </div>
          <Card
            title="FISC Assembler and Disassembler"
            content={`Developed a custom assembler for translating FISC (Four Instruction Set Computers) assembly code into hexadecimal format using a two cycle process.
                      Developed a disassembler that generated assembly instructions from hex code and simulated a step-by-step program execution visualization.`}
            imageSrc="images/3316.png"
            imageDirection="left"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
