const travelDeep = (node) =>
    (node.length
        ? []
        : [
              [
                  {
                      label: node.ratioName
                          ? node.ratioName
                          : node.dataElementName,
                      id: node.ratioId ? node.ratioId : node.dataElementId,
                      range: node.range,
                  },
              ],
          ]
    ).concat(
        ...node.children.map((child) =>
            travelDeep(child).map((arr) =>
                [
                    {
                        label: node.ratioName
                            ? node.ratioName
                            : node.dataElementName,
                        id: node.ratioId ? node.ratioId : node.dataElementId,
                        range: node.range,
                    },
                ].concat(arr)
            )
        )
    );

export const convertTreeToFlat = (node) => {
    const result = travelDeep(node);

    const flatArray = result.map((obj) => ({
        label: obj[obj.length - 1].label,
        id: obj[obj.length - 1].id,
        range: obj[obj.length - 1].range,
        node: obj,
    }));

    return flatArray;
};

export default convertTreeToFlat;
