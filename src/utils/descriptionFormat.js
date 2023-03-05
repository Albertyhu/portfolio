
export const FormatDescription = description => {
    console.log(description)
    const formatted = description.split('\n')
    return formatted.map(val => {
        return <p>{val}</p>
    })
}