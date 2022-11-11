const baseDataObject = {
    balance: 0
}

const baseAttributeObject = {
    transaction: {}
}

const baseTransactionAttributes = {
    to: "",
    amount: 0,
    timestamp: 0,
    sender: "",
}

const baseFilterObject = {
    transaction: {}
}

const baseTransactionFilter = {
    amountPerTransaction: 0,
    balanceBased: false,
    balance: 0,
    sendall: true,
    allowedRecievers: [],
}

const createStruct = (vals, baseObject) => {
    let out = baseObject;
    Object.keys(vals).map((key) => {
        out[key] = vals[key]
    })
    return out
}

x
module.exports = {
    createStruct,
    baseDataObject,
    baseAttributeObject,
    baseTransactionAttributes,
    baseFilterObject,
    baseTransactionFilter,
}