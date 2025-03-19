export default function(
    {
        cssClasses
    }: {
        cssClasses?: string[]
    }
) {
    return <box
        cssClasses={cssClasses != null ? cssClasses.concat(["divider"]) : ["divider"]}/>
}