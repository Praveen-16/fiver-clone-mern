import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    console.log("img data"+data)
    const res = await axios.post("https://api.cloudinary.com/v1_1/dml36pzpq/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log("Error in uploading img.."+err);
  }
};

export default upload;
