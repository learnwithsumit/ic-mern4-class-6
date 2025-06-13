import useScreenSize from "../hooks/useScreenSize";

export default function LayoutComponentTwo() {
    const onSmallDevice = useScreenSize(460);

    return (
        <div>
            <h1 className={onSmallDevice ? "small" : "big"}>Layout Two</h1>
        </div>
    );
}
