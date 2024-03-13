# To Dos for Workflow Files

- `workflows/create_preview`
  - `env` variables need to be defined with client specific values or values from Cloudformation
  - Do not yet know how to get the `executionRoleARN` value
  - Security groups in Gander used `SG_ID` variable but not defined anywhere I renamed it to `SG_NAME` since that was defined as an `env` variable.
  -

# To Dos for Action Files

- `actions/deploy-preview/action`
  - line 100: update hardcoded lb name to client lb name created in Cloudformation
  - update hardcoded host names for LB rule and generated URL
