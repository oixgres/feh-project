import {Text, Group} from 'react-konva';

// Customized text for FEH
const FEHText = ({x, y, width=250, text, fontSize, align='center', fillColor='white', strokeColor="#0D1E31",strokeWidth=4}) => {
    return(
        <Text
            text={text}
            fontFamily="feh_font"
            fontSize={fontSize}
            x={x}
            y={y}
            align={align}
            width={width}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fillAfterStrokeEnabled={true}
            lineJoin="round"
        />
    )
}

const FEHTextList = ({list, fontSize=17, x=0, y=0, inc=37, width=250, align='left', fillColor}) => {    
    return(
        <Group>
            {list.map((text, index) => (
                <FEHText
                    key={index}
                    text={text}
                    fontSize={fontSize}
                    x={x}
                    y={y + index * inc}
                    align={align}
                    width={width}
                    fillColor={fillColor}
                    strokeWidth={4}
                />
            ))}
        </Group>
    )

}

export {FEHText, FEHTextList};