// import React, { ComponentType, ReactElement } from 'react';

// Import all the available components
import Button from '../components/button/button';
import RichText from '../components/richtext/richtext';
import Form from '../components/form/form';
import Image from '../components/image/image';
import Teaser from "../components/teaser/teaser";
import CardsGrid from "../components/cardsGrid/cardsGrid";
import Container from "../components/container/container";
import ImageText from "../components/imageText/imageText";
import Banner from "../components/banner/banner";


const mapComponent = {
    "ContentfulTeaser" : Teaser,
    "ContentfulCardsGrid" : CardsGrid,
    "ContentfulButton": Button,
    "ContentfulText": RichText,
    "ContentfulForm": Form,
    "ContentfulImage": Image,
    "ContentfulContainer": Container,
    "ContentfulImageText" : ImageText,
    "ContentfulBanner": Banner
}

const mapTo = (data) => {
    return  mapComponent[data.component];
}

export default mapTo;