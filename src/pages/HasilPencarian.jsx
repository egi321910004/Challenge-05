// import { Component } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CardHasilPencarian from "../components/Contents/CardHasilPencarian";
import ListCar from "../components/Contents/ListCar";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { dataCarAction } from '../redux/actions/dataCarAction'

const HasilPencarian = () => {
    const dispatch = useDispatch();
    dispatch(dataCarAction());
    useEffect(() => {
        document.getElementsByClassName("hero")[0].style.display="none";
        document.getElementsByClassName("btn-hero")[0].style.display = "none";
        document.getElementById("header").style.height = "266px";
        document.getElementById("footer").style.marginTop = "100px";
        document.title = "Hasil Pencarian";
        console.log('mount it!');
    }, []);

    return (
        <>
        <Header />
        <CardHasilPencarian />
        <ListCar />
        <Footer />
        </>
    ) 
}

export default HasilPencarian;
