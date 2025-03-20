export default function(
    {
        cssClasses,
        marginTop,
        marginBottom,
        marginStart,
        marginEnd,
    }: {
        cssClasses?: string[],
        marginTop?: number,
        marginBottom?: number,
        marginStart?: number,
        marginEnd?: number,
    }
) {
    return <box
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginStart={marginStart}
        marginEnd={marginEnd}
        cssClasses={cssClasses != null ? cssClasses.concat(["divider"]) : ["divider"]}/>
}