export function headings( props ) {
    const content = props.map( ( item, index ) => {
        return <li><a href={item[1]}>{item[0]}</a></li>;
    } );
    return content;
}
 