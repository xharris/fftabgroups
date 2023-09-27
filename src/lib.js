const CONTEXT = {
    NEW_GROUP: 'add-group'
}

class DB {
    static GROUPS = 'groups'

    static createId = (collection) => [collection, Date.now()].join('-')
    static insert = (collection, data) => browser.storage.local.set({ [this.createId(collection)]: data })   
    /**
     * @template D 
     * @param {D} docType
     * @returns {Promise<D>}
     * */
    static findById = (ids, docType) => browser.storage.local.get(ids).then(docs => Object.values(docs).map(doc => docType(doc)))
    /** @param {string} collection */
    static count = (collection, docType) => browser.storage.local.get(null).then(docs => Object.keys(docs).filter(id => id.split('-')[0] === collection).length)
}

/** 
 * @param {Object} props
 * @param {number} props.tabId
 * */
const Group = (props) => props

export {
    CONTEXT,
    DB,
    Group
}