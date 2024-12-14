export default function(
    {
        css
    }: {
        css?: string
    }
) {
    return <box
        className="divider"
        css={css ? css : ""}/>
}