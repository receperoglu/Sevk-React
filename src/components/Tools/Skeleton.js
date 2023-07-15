import React from 'react';

export default function Skeleton({ rowCount = 0, columnCount = 0, icons }) {
    const skeletonRows = [];

    for (let row = 1; row <= rowCount; row++) {
        const skeletonCells = [];

        for (let column = 1; column <= columnCount; column++) {
            skeletonCells.push(
                <td key={column} className="loadingData">
                    {getIcon(column, icons)}
                </td>
            );
        }

        skeletonRows.push(<tr key={row}>{skeletonCells}</tr>);
    }

    return <React.Fragment>{skeletonRows}</React.Fragment>;
}

function getIcon(index, icons) {
    const iconItem = icons.find(item => item.order === index);

    if (iconItem && iconItem.icon === "edit") {
        return <i role="presentation"></i>;
    }
    else if (iconItem && iconItem.icon === "photo") {
        return <i className="controlIcons"></i>;
    }

    else if (iconItem && iconItem.icon === "download") {
        return <i data-icon-name="Download" class="FabricMDL2Icons"></i>;
    }
    else if (iconItem && iconItem.icon === "pdf") {
        return <img className='FileTypeIcon-icon' src='https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201207.001/assets/item-types/256/pdf.png' alt="" />;
    }


    else {
        return <div className="bar"></div>;
    }
}
