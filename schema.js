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
    },
    'Total Resources (ASL+Opening balance+Revenue Coleacted)': {
        prop: 'total_resources',
        type: Number,
        required: false
    },
    'Current Year Budget': {
        prop: 'current_year_budget',
        type: Number,
        required: false
    },
    'Next Year Budget': {
        prop: 'next_year_budget',
        type: Number,
        required: false
    },
    'Future Years Budget': {
        prop: 'future_year_budget',
        type: Number,
        required: false
    },
    'Total Budget': {
        prop: 'total_budget',
        type: Number,
        required: false
    },
    'Expenses + Full Asset Cost': {
        prop: 'expenses_full_asset_cost',
        type: Number,
        required: false
    },
    'Commitments': {
        prop: 'commitments',
        type: Number,
        required: false
    },
    'Total Delivery (Expenses and commitments)': {
        prop: 'total_delivery',
        type: Number,
        required: false
    },
    'Delivery % (Total Delivery/Current Year Budget)': {
        prop: 'delivery',
        type: Number,
        required: false
    },
    'Outstanding NEX Advances': {
        prop: 'outstanding_nex_advances',
        type: Number,
        required: false
    },
    'Total Utilization( Total Delivery+Outstanding NEX Advances)': {
        prop: 'total_utilization',
        type: Number,
        required: false
    },
    'Resource Balance (Total resources - Total Utilization)': {
        prop: 'resource_balance',
        type: Number,
        required: false
    },
    'Funding Agreement end date': {
        prop: 'funding_agreement_end_date',
        type: Date,
        required: false
    }

}

module.exports = schema