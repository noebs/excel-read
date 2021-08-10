const schema = {
    'Project': {
        prop: 'project_id',
        type: Number,
        required: true
    },
    'Project Description': {
        prop: 'description',
        type: String,
        required: true
    },
    'Output': {
        prop: 'output',
        type: Number,
        required: true
    },
    'Output Description': {
        prop: 'output_description',
        type: String,
        required: true
    },
    'Location': {
        prop: 'location',
        type: String,
        required: true
    },
    'Output Status (ongoing or Operationally Closed)': {
        prop: 'output_status',
        type: String,
        required: true
    },
    'Fund Description': {
        prop: 'fund_description',
        type: String,
        required: true
    },
    'Donor': {
        prop: 'donor',
        type: Number,
        required: true
    },
    'Donor Description': {
        prop: 'donor_description',
        type: String,
        required: true
    },
    'ASL': {
        prop: 'ASL',
        type: Number,
        required: false
    },
    'Opening Cash Balance': {
        prop: 'opening_cash_balance',
        type: Number,
        required: false
    },
    'Revenue Collected': {
        prop: 'revenue_collected',
        type: Number,
        required: false
    }

}

module.exports = schema