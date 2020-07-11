import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import APIManager from '../../modules/APIManager';
import StockEditForm from './StockEditForm';
import Button from '@material-ui/core/Button';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function EditStockModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = () => {
    APIManager.deleteStockPurchase(props.id).then(() => props.printPortfolio())
  }


  const body = (
    <div style={modalStyle} className={classes.paper} id="edit-modal">
      <h2 id="simple-modal-title">{props.symbol}</h2>
      <p id="simple-modal-description">
        Please enter a stock symbol, purchase price, number of shares, and date of purchase.
      </p>
      <StockEditForm id={props.id} printPortfolio={props.printPortfolio} handleClose={handleClose} />
      

    </div>
  );

  return (
    <div>
     <Link href="#"> <EditRoundedIcon variant="contained" color="primary" onClick={handleOpen} /></Link>
     <Link href="#"> <DeleteRoundedIcon variant="contained" color="primary" onClick={handleDelete}>Delete Purchase</DeleteRoundedIcon></Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}

      </Modal>
    </div>
  );
}
