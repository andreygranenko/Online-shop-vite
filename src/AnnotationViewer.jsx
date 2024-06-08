import React, { useEffect, useState } from "react";
import roadImage from "./assets/road327.png"; // Убедитесь, что путь к файлу верный

const AnnotationViewer = () => {
  const [annotation, setAnnotation] = useState(null);

  useEffect(() => {
    const fetchAnnotation = async () => {
      try {
        const response = await fetch('/road327.xml'); // Путь к файлу в публичной папке
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");

        const folder = xmlDoc.getElementsByTagName("folder")[0].textContent;
        const filename = xmlDoc.getElementsByTagName("filename")[0].textContent;
        const size = {
          width: xmlDoc.getElementsByTagName("width")[0].textContent,
          height: xmlDoc.getElementsByTagName("height")[0].textContent,
          depth: xmlDoc.getElementsByTagName("depth")[0].textContent,
        };
        const objects = Array.from(xmlDoc.getElementsByTagName("object")).map((obj) => ({
          name: obj.getElementsByTagName("name")[0].textContent,
          bbox: {
            xmin: obj.getElementsByTagName("xmin")[0].textContent,
            ymin: obj.getElementsByTagName("ymin")[0].textContent,
            xmax: obj.getElementsByTagName("xmax")[0].textContent,
            ymax: obj.getElementsByTagName("ymax")[0].textContent,
          },
        }));

        setAnnotation({ folder, filename, size, objects });
      } catch (error) {
        console.error("Error fetching or parsing annotation", error);
      }
    };

    fetchAnnotation();
  }, []);

  if (!annotation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Annotation</h2>
      <p><strong>Folder:</strong> {annotation.folder}</p>
      <p><strong>Filename:</strong> {annotation.filename}</p>
      <p><strong>Size:</strong> {annotation.size.width}x{annotation.size.height}px, {annotation.size.depth} channels</p>
      <img src={roadImage} alt={annotation.filename} width={annotation.size.width} height={annotation.size.height} />
      <h3>Objects:</h3>
      {annotation.objects.map((obj, index) => (
        <div key={index}>
          <p><strong>{obj.name}</strong></p>
          <p>Bounding Box: ({obj.bbox.xmin}, {obj.bbox.ymin}) to ({obj.bbox.xmax}, {obj.bbox.ymax})</p>
        </div>
      ))}
    </div>
  );
};

export default AnnotationViewer;
