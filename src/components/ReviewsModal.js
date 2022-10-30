import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ReviewsModal = ({ modalOpen,setModalOpen,movie }) => {
    
  const handleClose = () => setModalOpen(false);

  return (
    <Modal open={modalOpen} onClose={handleClose}>
    <><Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
        {`${movie.title} reviews: `}
      </Typography>
      <Typography variant="p" color="text.secondary">
        No movie Reviews
      </Typography>
      </>
    </Modal>
  );
};
export default ReviewsModal;
