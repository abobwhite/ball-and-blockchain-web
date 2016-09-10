export default [{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_cost","type":"uint256"},{"name":"_details","type":"bytes32"}],"name":"addReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"targetBidder","type":"address"}],"name":"accept","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getPolicies","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"riskType","type":"bytes32[]"},{"name":"ratingExpiration","type":"uint256[]"},{"name":"offerExpiration","type":"uint256[]"},{"name":"territoryOfIssue","type":"bytes32[]"},{"name":"policyFaceAmount","type":"uint256[]"},{"name":"disclosures","type":"bytes32[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_riskType","type":"bytes32"},{"name":"_ratingExpiration","type":"uint256"},{"name":"_offerExpiration","type":"uint256"},{"name":"_territoryOfIssue","type":"bytes32"},{"name":"_policyFaceAmount","type":"uint256"},{"name":"_gender","type":"bytes32"},{"name":"_dob","type":"uint256"},{"name":"_disclosures","type":"bytes32"}],"name":"addPolicy","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getBids","outputs":[{"name":"bidders","type":"address[]"},{"name":"values","type":"uint256[]"}],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getReviews","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"reviewers","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"costs","type":"uint256[]"},{"name":"details","type":"bytes32[]"},{"name":"purchasers","type":"address[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_reviewId","type":"bytes32"}],"name":"buyReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"bytes32"},{"name":"cedingUser","type":"address"},{"name":"assumingUser","type":"address"},{"name":"riskType","type":"bytes32"},{"name":"ratingExpiration","type":"uint256"},{"name":"offerExpiration","type":"uint256"},{"name":"territoryOfIssue","type":"bytes32"},{"name":"policyFaceAmount","type":"uint256"},{"name":"gender","type":"bytes32"},{"name":"dob","type":"uint256"},{"name":"disclosures","type":"bytes32"},{"name":"ended","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"CanceledBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"Accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewReview","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"PurchasedReview","type":"event"}];

//export default [{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_cost","type":"uint256"},{"name":"_details","type":"bytes32"}],"name":"addReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"targetBidder","type":"address"}],"name":"accept","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getPolicies","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"riskType","type":"bytes32[]"},{"name":"ratingExpiration","type":"uint256[]"},{"name":"offerExpiration","type":"uint256[]"},{"name":"territoryOfIssue","type":"bytes32[]"},{"name":"policyFaceAmount","type":"uint256[]"},{"name":"disclosures","type":"bytes32[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_riskType","type":"bytes32"},{"name":"_ratingExpiration","type":"uint256"},{"name":"_offerExpiration","type":"uint256"},{"name":"_territoryOfIssue","type":"bytes32"},{"name":"_policyFaceAmount","type":"uint256"},{"name":"_gender","type":"bytes32"},{"name":"_dob","type":"uint256"},{"name":"_disclosures","type":"bytes32"}],"name":"addPolicy","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getBids","outputs":[{"name":"bidders","type":"address[]"},{"name":"values","type":"uint256[]"}],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getReviews","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"reviewers","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"costs","type":"uint256[]"},{"name":"details","type":"bytes32[]"},{"name":"purchasers","type":"address[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_reviewId","type":"bytes32"}],"name":"buyReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"bytes32"},{"name":"cedingUser","type":"address"},{"name":"assumingUser","type":"address"},{"name":"riskType","type":"bytes32"},{"name":"ratingExpiration","type":"uint256"},{"name":"offerExpiration","type":"uint256"},{"name":"territoryOfIssue","type":"bytes32"},{"name":"policyFaceAmount","type":"uint256"},{"name":"gender","type":"bytes32"},{"name":"dob","type":"uint256"},{"name":"disclosures","type":"bytes32"},{"name":"ended","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewPolicy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"CanceledBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"Accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewReview","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"PurchasedReview","type":"event"}];

//export default [{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_cost","type":"uint256"},{"name":"_details","type":"bytes32"}],"name":"addReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"targetBidder","type":"address"}],"name":"accept","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getPolicies","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"riskType","type":"bytes32[]"},{"name":"ratingExpiration","type":"uint256[]"},{"name":"offerExpiration","type":"uint256[]"},{"name":"territoryOfIssue","type":"bytes32[]"},{"name":"policyFaceAmount","type":"uint256[]"},{"name":"disclosures","type":"bytes32[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_riskType","type":"bytes32"},{"name":"_ratingExpiration","type":"uint256"},{"name":"_offerExpiration","type":"uint256"},{"name":"_territoryOfIssue","type":"bytes32"},{"name":"_policyFaceAmount","type":"uint256"},{"name":"_gender","type":"bytes32"},{"name":"_dob","type":"uint256"},{"name":"_disclosures","type":"bytes32"}],"name":"addPolicy","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getBids","outputs":[{"name":"bidders","type":"address[]"},{"name":"values","type":"uint256[]"}],"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getReviews","outputs":[{"name":"ids","type":"bytes32[]"},{"name":"reviewers","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"costs","type":"uint256[]"},{"name":"details","type":"bytes32[]"},{"name":"purchasers","type":"address[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_reviewId","type":"bytes32"}],"name":"buyReview","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"bytes32"},{"name":"cedingUser","type":"address"},{"name":"assumingUser","type":"address"},{"name":"riskType","type":"bytes32"},{"name":"ratingExpiration","type":"uint256"},{"name":"offerExpiration","type":"uint256"},{"name":"territoryOfIssue","type":"bytes32"},{"name":"policyFaceAmount","type":"uint256"},{"name":"gender","type":"bytes32"},{"name":"dob","type":"uint256"},{"name":"disclosures","type":"bytes32"},{"name":"ended","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"CanceledBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"Accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewReview","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"PurchasedReview","type":"event"}];

// export default [{
//   'constant': false,
//   'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': 'targetBidder', 'type': 'address'}],
//   'name': 'accept',
//   'outputs': [],
//   'payable': false,
//   'type': 'function'
// }, {
//   'constant': true,
//   'inputs': [],
//   'name': 'getPolicies',
//   'outputs': [{'name': 'id', 'type': 'bytes32[]'}, {'name': 'riskType', 'type': 'bytes32[]'}, {
//     'name': 'ratingExpiration',
//     'type': 'uint256[]'
//   }, {'name': 'offerExpiration', 'type': 'uint256[]'}, {'name': 'territoryOfIssue', 'type': 'bytes32[]'}, {
//     'name': 'policyFaceAmount',
//     'type': 'uint256[]'
//   }, {'name': 'disclosures', 'type': 'bytes32[]'}],
//   'payable': false,
//   'type': 'function'
// }, {
//   'constant': false,
//   'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': '_value', 'type': 'uint256'}, {
//     'name': '_cost',
//     'type': 'uint256'
//   }, {'name': '_details', 'type': 'bytes32'}],
//   'name': 'reviewPolicy',
//   'outputs': [],
//   'payable': false,
//   'type': 'function'
// }, {
//   'constant': false,
//   'inputs': [{'name': '_riskType', 'type': 'bytes32'}, {'name': '_ratingExpiration', 'type': 'uint256'}, {
//     'name': '_offerExpiration',
//     'type': 'uint256'
//   }, {'name': '_territoryOfIssue', 'type': 'bytes32'}, {'name': '_policyFaceAmount', 'type': 'uint256'}, {
//     'name': '_gender',
//     'type': 'bytes32'
//   }, {'name': '_dob', 'type': 'uint256'}, {'name': '_disclosures', 'type': 'bytes32'}],
//   'name': 'addPolicy',
//   'outputs': [],
//   'payable': false,
//   'type': 'function'
// }, {
//   'constant': true,
//   'inputs': [{'name': '_policyId', 'type': 'bytes32'}],
//   'name': 'getBids',
//   'outputs': [{'name': 'bidders', 'type': 'address[]'}, {'name': 'values', 'type': 'uint256[]'}],
//   'payable': false,
//   'type': 'function'
// }, {
//   'constant': false,
//   'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': '_value', 'type': 'uint256'}],
//   'name': 'bid',
//   'outputs': [{'name': 'success', 'type': 'bool'}],
//   'payable': false,
//   'type': 'function'
// }, {
//   'anonymous': false,
//   'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
//   'name': 'NewBid',
//   'type': 'event'
// }, {
//   'anonymous': false,
//   'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
//   'name': 'CanceledBid',
//   'type': 'event'
// }, {
//   'anonymous': false,
//   'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
//   'name': 'Accepted',
//   'type': 'event'
// }];