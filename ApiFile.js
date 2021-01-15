/*
    array -> array -> array -> array 
*/
let result_empty = [];

let result = payload.forEach(item=> {
    item.FLPAppInfoToTileTargetMappingInfo != undefined &&
    item.FLPAppInfoToTileTargetMappingInfo.length > 0 && 
    item.FLPAppInfoToTileTargetMappingInfo.forEach(nestedItem => {
        nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog != undefined &&
        nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog.length > 0 &&
        nestedItem.FLPTileTargetMappingInfoToR_TileTMBusinessCatalog.forEach(nestedNestedItem => {
            nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText != undefined &&
            nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText.length > 0 &&
            nestedNestedItem.FLPR_TileTMBusinessCatalogToBusinessCatalogText.forEach(ultraNested => {
                if(ultraNested.BC_ID && ultraNested.DESCRIPTION) {
                    result_empty.push({"id": ultraNested.BC_ID, "description": ultraNested.DESCRIPTION})
                } 
            })
        })
    })
});

/* cleaner way */ 



let i = 0;
function getStrictObjects(arrayObjs, keyName) {
    return arrayObjs != undefined &&
           arrayObjs[keyName] != undefined &&
            arrayObjs[keyName].length > 0
            ? arrayObjs[keyName] : [];
}
let result_empty_2 = [];

payload.forEach(item=> {
    getStrictObjects(item, "FLPAppInfoToTileTargetMappingInfo")
                 .forEach(element => {
                    getStrictObjects(element, "FLPTileTargetMappingInfoToR_TileTMBusinessGroup").
                    forEach(element => {
                        getStrictObjects(element, "FLPR_TileTMBusinessGroupToBusinessGroupText")
                        .forEach(element => {
                            if(element.GROUP_ID && element.DESCRIPTION) {
                                result_empty_2.push({"group_id": element.BC_ID, "description": element.DESCRIPTION})
                            }  
                        });
                    });
    });
})


console.log(result_empty_2);