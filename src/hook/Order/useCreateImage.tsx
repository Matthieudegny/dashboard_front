import { useState, useEffect } from "react";

//model
import { ImageFrontType } from "../../model/Order/model_order";
import { stat } from "fs";

export const useCreateImage = (
  listImageWithTitle: ImageFrontType[],
  setlistImageWithTitle: React.Dispatch<React.SetStateAction<ImageFrontType[]>>
): {
  imageCreating: { id: number; image: string };
  handleUploadImage: (event: any) => void;
  handleCreateImage: () => void;
  contentTitleImage: string;
  setcontentTitleImage: React.Dispatch<React.SetStateAction<string>>;
  contentDescriptionImage: string;
  setcontentDescriptionImage: React.Dispatch<React.SetStateAction<string>>;
  statutError: { titleEmpty: boolean; descriptionEmpty: boolean; imageEmpty: boolean };
} => {
  const [statutError, setstatutError] = useState({
    titleEmpty: false,
    descriptionEmpty: false,
    imageEmpty: false,
  });
  const [imageCreating, setimageCreating] = useState({
    id: 0,
    image: "",
  });
  const [contentTitleImage, setcontentTitleImage] = useState("");
  const [contentDescriptionImage, setcontentDescriptionImage] = useState("");

  //handle errors
  useEffect(() => {
    if (contentTitleImage !== "" && statutError.titleEmpty) setstatutError((prev) => ({ ...prev, titleEmpty: false }));
  }, [contentTitleImage]);
  useEffect(() => {
    if (contentDescriptionImage !== "" && statutError.descriptionEmpty) setstatutError((prev) => ({ ...prev, descriptionEmpty: false }));
  }, [contentDescriptionImage]);

  //i catch the last id of listImageWithTitle, and get a new id to the new image
  useEffect(() => {
    if (listImageWithTitle.length === 0) return;
    const lastId = listImageWithTitle[listImageWithTitle.length - 1].id;
    setimageCreating((prev) => ({ ...prev, id: lastId + 1 }));
  }, [listImageWithTitle]);

  //handle the upload of the image
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
      if (statutError.imageEmpty) setstatutError((prev) => ({ ...prev, imageEmpty: false }));
      setimageCreating((prev) => ({ ...prev, image: image }));
    } catch (error) {
      console.log(error);
    }
  };

  //handle the creation of the image
  const handleCreateImage = () => {
    console.log("contentTitleImage", contentTitleImage);
    console.log("contentDescriptionImage", contentDescriptionImage);
    //handle errors
    if (contentTitleImage === "") {
      setstatutError((prev) => ({ ...prev, titleEmpty: true }));
      return;
    } else {
      if (statutError.titleEmpty) setstatutError((prev) => ({ ...prev, titleEmpty: false }));
    }
    if (contentDescriptionImage === "") {
      setstatutError((prev) => ({ ...prev, descriptionEmpty: true }));
      return;
    } else {
      if (statutError.descriptionEmpty) setstatutError((prev) => ({ ...prev, descriptionEmpty: false }));
    }
    if (imageCreating.image === "") {
      setstatutError((prev) => ({ ...prev, imageEmpty: true }));
      return;
    }
    console.log("imageCreating", imageCreating);

    //creation of the new object ImageFrontType
    let arrayCloned = structuredClone(listImageWithTitle);
    const newImage: ImageFrontType = {
      id: imageCreating.id,
      title: contentTitleImage,
      image: imageCreating.image,
      description: contentDescriptionImage,
    };
    console.log("newImage", newImage);
    arrayCloned.unshift(newImage);

    //add to the list
    setlistImageWithTitle(arrayCloned);

    //reset the form
    setcontentTitleImage("");
    setcontentDescriptionImage("");
    setimageCreating({
      id: 0,
      image: "",
    });
  };

  return { imageCreating, handleUploadImage, handleCreateImage, contentTitleImage, setcontentTitleImage, contentDescriptionImage, setcontentDescriptionImage, statutError };
};
