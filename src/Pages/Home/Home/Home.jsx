import React from 'react';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';
import FourthSection from '../FourthSection/FourthSection';
import CollectionFeatured from '../CollectionFeatured/CollectionFeatured';
import FinalPart from '../FinalPart/FinalPart';

const Home = () => {
    return (
        <>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <CollectionFeatured></CollectionFeatured>
            <FourthSection></FourthSection>
            <FinalPart></FinalPart>
        </>
    );
};

export default Home;