
//check event type
const isTypeOf = (type) => (
    (t) => t === type
)

const isPullReqType = isTypeOf("PullRequestEvent");
const isForkType = isTypeOf("ForkEvent")


export {isPullReqType, isForkType}