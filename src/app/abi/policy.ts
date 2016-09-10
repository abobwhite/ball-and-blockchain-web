export default [{
  'constant': false,
  'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': 'targetBidder', 'type': 'address'}],
  'name': 'accept',
  'outputs': [],
  'payable': false,
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'getPolicies',
  'outputs': [{'name': 'id', 'type': 'bytes32[]'}, {'name': 'riskType', 'type': 'bytes32[]'}, {
    'name': 'ratingExpiration',
    'type': 'uint256[]'
  }, {'name': 'offerExpiration', 'type': 'uint256[]'}, {'name': 'territoryOfIssue', 'type': 'bytes32[]'}, {
    'name': 'policyFaceAmount',
    'type': 'uint256[]'
  }, {'name': 'disclosures', 'type': 'bytes32[]'}],
  'payable': false,
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': '_value', 'type': 'uint256'}, {
    'name': '_cost',
    'type': 'uint256'
  }, {'name': '_details', 'type': 'bytes32'}],
  'name': 'reviewPolicy',
  'outputs': [],
  'payable': false,
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_riskType', 'type': 'bytes32'}, {'name': '_ratingExpiration', 'type': 'uint256'}, {
    'name': '_offerExpiration',
    'type': 'uint256'
  }, {'name': '_territoryOfIssue', 'type': 'bytes32'}, {'name': '_policyFaceAmount', 'type': 'uint256'}, {
    'name': '_gender',
    'type': 'bytes32'
  }, {'name': '_dob', 'type': 'uint256'}, {'name': '_disclosures', 'type': 'bytes32'}],
  'name': 'addPolicy',
  'outputs': [],
  'payable': false,
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_policyId', 'type': 'bytes32'}],
  'name': 'getBids',
  'outputs': [{'name': 'bidders', 'type': 'address[]'}, {'name': 'values', 'type': 'uint256[]'}],
  'payable': false,
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_policyId', 'type': 'bytes32'}, {'name': '_value', 'type': 'uint256'}],
  'name': 'bid',
  'outputs': [{'name': 'success', 'type': 'bool'}],
  'payable': false,
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
  'name': 'NewBid',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
  'name': 'CanceledBid',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
  'name': 'Accepted',
  'type': 'event'
}];