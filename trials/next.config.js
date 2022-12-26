/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI:"mongodb+srv://Anwar:Anwar1997@cluster0.mnqdo.mongodb.net/nextApp?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
