import React, { useState } from "react";
import ImageGrid from "../comps/ImageGrid";
import UploadForm from "../comps/UploadForm";
import Modal from "../comps/Modal";

const Profile = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        </>
    )
}

export default Profile;