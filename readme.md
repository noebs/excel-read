
**Dont forgit to modify users list**

docker build -t excel-read .

docker run --name excel-read-service -v upload_data:/images excel-read

expose it if there is no reverse proxy 
