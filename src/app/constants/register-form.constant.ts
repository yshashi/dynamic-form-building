export const registerFormControls = [
  {
    "name": "firstName",
    "label": "First name",
    "value": "",
    "type": "text",
    "validators": [

      {
        "validatorName": "email",
        "email": "email",
        "message": "it should be email"
      },
      {
        "validatorName": "required",
        "required": true,
        "message": "First Name is Required"
      },
    ]
  },
  {
    "name": "lastName",
    "label": "Last name",
    "value": "",
    "type": "text",
    "validators": [
      {
        "validatorName": "required",
        "required": true,
        "message": "Last Name is Required"
      },
      {
        "validatorName": "minLength",
        "minLength": 15,
        "message": "Minimum char should be 15"
      }
    ]
  },
  {
    "name": "password",
    "label": "Password",
    "value": "",
    "type": "password",
    "validators": [
      {
        "validatorName": "required",
        "required": true,
        "message": "Password is Required"
      },
      {
        "validatorName": "minLength",
        "minLength": 15,
        "message": "Minimum char should be 15"
      }
    ]
  },

  // {
  //   "name": "country",
  //   "label": "Country",
  //   "options": [
  //     {
  //       "id": 1,
  //       "value": "India"
  //     },
  //     {
  //       "id": 2,
  //       "value": "Singapore"
  //     }
  //   ],
  //   "type": "select",
  //   "validators": {
  //     "required": true
  //   }
  // },
  // {
  //   "name": "comments",
  //   "label": "Comments",
  //   "value": "",
  //   "type": "textarea",
  //   "validators": {}
  // },
  // {
  //   "name": "agreeTerms",
  //   "label": "This is a checkbox?",
  //   "value": "false",
  //   "type": "checkbox",
  //   "validators": {}
  // }
]
