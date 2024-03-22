import { useState, useEffect } from "react";

//model
import { ImageFrontType } from "../../model/Order/model_order";

export const useCreateImage = (
  listImageWithTitle: ImageFrontType[],
  setlistImageWithTitle: React.Dispatch<React.SetStateAction<ImageFrontType[]>>,
  setstatutError: React.Dispatch<React.SetStateAction<{ titleEmpty: boolean; descriptionEmpty: boolean; imageEmpty: boolean }>>,
  statutError: { titleEmpty: boolean; descriptionEmpty: boolean; imageEmpty: boolean }
): {
  imageCreating: ImageFrontType;
  setimageCreating: React.Dispatch<React.SetStateAction<ImageFrontType>>;
  handleUploadImage: (event: any) => void;
  handleCreateImage: () => void;
} => {
  const [imageCreating, setimageCreating] = useState<ImageFrontType>({
    id: 0,
    title: "",
    image: "",
    description: "",
  });

  //i catch the last id of listImageWithTitle, and get a new id to the new image
  useEffect(() => {
    if (listImageWithTitle.length === 0) return;
    const lastId = listImageWithTitle[listImageWithTitle.length - 1].id;
    setimageCreating((prev) => ({ ...prev, id: lastId + 1 }));
  }, [listImageWithTitle]);

  const handleUploadImage = async (event: any) => {
    console.log("event", event.target.files[0]);
    const readFileAsync = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
          resolve(fileReader.result as string);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };

        fileReader.readAsDataURL(file);
      });
    };

    const imageFile = event.target.files[0];

    // Reset the value of the file input element to null, necessary for the onChange event to be triggered if the same file is uploaded multiple times in a row
    event.target.value = null;

    const formData = new FormData();
    formData.append("file", imageFile);
    try {
      const image = await readFileAsync(imageFile);
      console.log("image", image);
      const newImage = {
        title: "",
        image: image,
      };
      console.log("newImage", newImage);
      if (statutError.imageEmpty) setstatutError((prev) => ({ ...prev, imageEmpty: false }));
      setimageCreating((prev) => ({ ...prev, image: image }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateImage = () => {
    if (imageCreating.title === "") {
      setstatutError((prev) => ({ ...prev, titleEmpty: true }));
      return;
    }
    if (imageCreating.description === "") {
      setstatutError((prev) => ({ ...prev, descriptionEmpty: true }));
      return;
    }
    if (imageCreating.image === "") {
      setstatutError((prev) => ({ ...prev, imageEmpty: true }));
      return;
    }
    console.log("imageCreating", imageCreating);
    let arrayCloned = structuredClone(listImageWithTitle);
    arrayCloned.unshift(imageCreating);
    setlistImageWithTitle(arrayCloned);

    setimageCreating({
      id: 0,
      title: "",
      image: "",
      description: "",
    });
  };

  return { imageCreating, setimageCreating, handleUploadImage, handleCreateImage };
};
