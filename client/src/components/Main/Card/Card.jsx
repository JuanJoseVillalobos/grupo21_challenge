import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MdOutlineMail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fotoJose from "/imgUsers/foto5.jpg"
import fotoFran from "/imgUsers/foto6.jpg"
import { Button, CardActionArea, CardActions, ButtonGroup, Box } from '@mui/material';

export default function MultiActionAreaCard({ profesion, nombre, apellido, index }) {
    const buttons = [
        <Button key="one"><FaRegHeart /></Button>,
        <Button key="two"><FiMessageCircle /></Button>,
        <Button key="three"><MdOutlineMail /></Button>,
    ];
    const fotos = [fotoFran, fotoJose];
    console.log(profesion, nombre, apellido, "estos son nombres y apelkidps");
    return (
        <div className='w-full p-2  flex flex-col justify-center items-center md:w-3/12 md:shadow-xs'>


            <Card sx={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <CardActionArea
                    sx={{

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>


                    <img className='w-1/2 md:w-full' src={fotos[index]} alt={fotos[index]} />

                    <CardContent>
                        <Typography
                            sx={{

                                display: "flex",
                                flexDirection: "column",
                                fontSize: "17px",
                                justifyContent: "center",
                                alignItems: "center",
                                '@media (min-width: 600px)': {
                                    fontSize: "20px",
                                }
                            }}
                            gutterBottom variant="h5" component="div">
                            {`${nombre} ${apellido}`}
                        </Typography>
                        <Typography
                            sx={{


                                '@media (min-width: 600px)': {
                                    fontSize: "20px",
                                }
                            }}
                            variant="body2" color="text.secondary">
                            {profesion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup size="small" aria-label="Small button group">
                            {buttons}
                        </ButtonGroup>

                    </Box>
                </CardActions>
            </Card>
        </div>
    );
}
