import useScreenSize from "../hooks/useScreenSize";

export default function LayoutComponentOne() {
    const onSmallDevice = useScreenSize(768);

    return (
        <div>
            <h1 id="heading">
                I am on {onSmallDevice ? "small" : "big"} display
            </h1>
        </div>
    );
}
