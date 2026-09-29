# Use the official Node.js 18 LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your app runs on
EXPOSE 8000

# Set environment variables (optional, or configure via a .env file)

# Define the command to run the app
CMD ["npm", "run", "dev"]
