# Use a lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Vite globally so the dev server can run
RUN npm install -g vite

# Copy all frontend code
COPY . .

# Expose frontend port
EXPOSE 5173

# Run dev server
CMD ["vite", "--host"]
