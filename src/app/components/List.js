export default function List(props) {
    return (
        <ul className="list-disc list-inside mb-8">
        <li>{props.listItemOne}</li>
        <li>{props.listItemTwo}</li>
        <li>{props.listItemThree}</li>
        <li>{props.listItemFour}</li>
        {/* <li>{props.listItemFive}</li>
        <li>{props.listItemSix}</li> */}
    </ul>
    )
}