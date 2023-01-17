import React, {useEffect, useState} from "react";
import { Stage, Layer, Image } from "react-konva";
import {FEHText, FEHTextList} from '../collections/Text.js'; 
import CustomPanel from './CustomPanel.js';

const UnitMaker = ({name='-',nickname='-',weaponType='',moveType='',stats, merges=0,df=0, skills=null}) =>{
    const [imgCol, setimgCol] = useState(null);
    const [skillList, setSkillList] = useState(['-', '-', '-', '-', '-', '-', '-']);
    const width = 800, height = 960;

    useEffect(() => {
        const img = new window.Image()
        const background = new window.Image()
        const set = new window.Image()
        const exp = new window.Image()
        const df_panel = new window.Image()

        background.src = "https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/9/9d/BG_DetailedStatus.png";
        img.src = "https://gamepress.gg/feheroes/sites/fireemblem/files/2022-10/RearmedRobinF_Neutral.png";
        set.src = "images/front-unit-asset-set.png";
        exp.src = "images/exp-panel.png"; // exp panel
        df_panel.src = "images/df-panel.png"; // draco flowers panel
        // set.src = "images/test2.png";

        // if (skills)
        //     setSkillList(Object.values(skills));

        setimgCol({background, img, set, exp, df_panel});
    }, [])


    return(
        <div>
            {/* <Stage width={1080} height={1920} scaleX={0.5} scaleY={0.5}> too much blur */}
            {/* <Stage width={270} height={480} scaleX={2} scaleY={2}> */}
            <Stage width={540} height={960}>
                <Layer>
                    <Image
                        image={imgCol?.background}
                        x={-135}
                        y={0}
                        width={width}
                        height={height}
                    />
                    <Image
                        image={imgCol?.img}
                        x={-135}
                        y={0}
                        width={width}
                        height={height}
                    />
                    <Image
                        image={imgCol?.set}
                        x={0}
                        y={0}
                        width={540}
                        height={height}
                    />
                    
                    {/* Name and Nickname */}
                    <FEHText
                        text={nickname}
                        fontSize={24}
                        x={17}
                        y={424}
                    />
                    <FEHText
                        text={name}
                        fontSize={26}
                        x={43}
                        y={483}
                    />

                    {/* Level */}
                    <FEHText
                        text="LV."
                        fontSize={18}
                        x={52}
                        y={558}
                        width={30}
                    />
                    <FEHText
                        text={40}
                        fontSize={19}
                        x={97}
                        y={557}
                        width={70}
                        align="left"
                    />
                    <FEHText
                        text={`+${merges}`}
                        fontSize={19}
                        x={97}
                        y={557}
                        width={70}
                        align="right"
                        fillColor="#94C83D"
                    />

                    {/* DracoFlower */}
                    {
                        df > 0  && (
                        <CustomPanel img={imgCol?.df_panel} x={204} y={549}>
                            <FEHText 
                                text={`+${df}`}
                                fontSize={19}
                                x={56}
                                y={8}
                                align={'left'}
                                strokeWidth={4}
                            />
                        </CustomPanel>)
                    }

                    {/* Experience */}
                    <CustomPanel
                        img={imgCol?.exp}
                        x={df > 0 ? 315 : 202}
                        y={545}
                    >
                        <FEHText
                            text="EXP"
                            fontSize={18}
                            x={20}
                            y={13}
                            width={60}
                            fillColor='white'
                            strokeWidth={4}
                        />
                        <FEHText
                            text="MAX"
                            fontSize={18}
                            x={106}
                            y={13}
                            width={60}
                            fillColor='white'
                            strokeWidth={4}
                        />
                    </CustomPanel>
                    
                    {/* Stats */}
                    <FEHTextList
                        list={[
                            'HP',
                            'Atk',
                            'Spd',
                            'Def',
                            'Res',
                        ]}
                        fontSize={18}
                        x = {90}
                        y = {603}
                        inc = {37.5}
                    />
                    <FEHTextList
                        list={Object.values(stats)}
                        fontSize = {18}
                        x = {142}
                        y = {603}
                        inc = {37.5}
                        width = {60}
                        align = "right"
                        fillColor = "#FAF599"
                    />
                    <FEHTextList
                        list={[
                            'SP',
                            'HM',
                        ]}
                        fontSize = {18}
                        x = {90}
                        y = {788}
                        inc = {37.5}
                    />
                    <FEHTextList
                        list={[
                            9999,
                            5000,
                        ]}
                        fontSize = {18}
                        x = {142}
                        y = {788}
                        inc = {37.5}
                        width = {60}
                        align = "right"
                        fillColor = "#94C83D"
                    />

                    {/* Skills */}
                    <FEHTextList
                        list={skillList}
                        x = {317}
                        y = {604}
                    />

                    {/* Voice & Draw */}
                    <FEHText
                        text="Chris Smith"
                        fontSize={16}
                        x={35}
                        y={899}
                        width={250}
                        align={'left'}
                    />
                    <FEHText
                        text="Fujiwara Ryo (冨士原良)"
                        fontSize={16}
                        x={35}
                        y={919}
                        width={250}
                        align={'left'}
                    />
                </Layer>
            </Stage>
        </div>
    )
}

export default UnitMaker;