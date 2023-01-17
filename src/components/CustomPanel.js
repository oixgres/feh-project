import { Group, Image } from "react-konva";

const CustomPanel = ({img, x=0, y=0, children}) => {
    return (
        <Group x={x} y={y} width={210} height={50}>
            <Image
                image={img}
                x={0}
                y={0}
            />
            { children}
        </Group>
    )
}          


export default CustomPanel;