const mockGraphqlData = [
  {
    name: 'step1',
    title: 'User Registration',
    sections: [
      {
        name: 'applicant',
        caption: 'USER INFORMATION',
        fields: [
          {
            name: 'firstName',
            component: 'input',
            caption: 'First Name',
            validationRule: '^(?!\\s*$).+',
            subfields: []
          },
          {
            name: 'lastName',
            component: 'input',
            caption: 'Last Name',
            validationRule: '^.{6,}$'
            , subfields: []
          },
          {
            name: 'middleName',
            component: 'input',
            caption: 'Middle Name',
            subfields: []
          },
          {
            name: 'dateOfBirth',
            component: 'input',
            type: 'date',
            caption: 'Date of Birth'
            , subfields: []
          },
          {
            name: 'gender',
            component: 'radio',
            caption: 'Gender',
            options: [
              { value: 'MALE', title: 'Male' },
              { value: 'FEMALE', title: 'Female' }
            ],
            subfields: [
              {
                name: 'TESTING',
                component: 'input',
                caption: 'TESTING',
                initialValue: 'Oleg',
                validationRule: '^(?!\\s*$).+',
                mainfield: 'gender'
              }
            ]
          },

          {
            name: 'maritalStatus',
            component: 'select',
            caption: 'Marital Status',
            options: [
              { value: 'MARRIED', title: 'Married' },
              { value: 'DIVORCED', title: 'Divorced' },
              { value: 'WINDOW', title: 'Window' },
              { value: 'SEPARATED', title: 'Separated' },
              { value: 'SINGLE', title: 'Single' }
            ],
            subfields: []
          },
          {
            name: 'mobile',
            type: 'number',
            component: 'input',
            caption: 'MOBILE',
            subfields: []
          },

          {
            name: 'Email',
            component: 'input',
            caption: 'Email',
            type: 'email'
            , subfields: []
          },
          {
            name: 'maritalStatus1',
            component: 'multiselect',
            caption: 'Area of Interest',
            options: [
              { id: 1, label: 'Computer Networks' },
              { id: 2, label: 'DBMS' },
              { id: 3, label: 'WEB Technology' },
              { id: 4, label: 'Cloud Computing' },]
            , subfields: []
          },
          {
            name: 'Address',
            component: 'textarea',
            caption: 'Address',
            subfields: []
          },
          {
            name: 'agree',
            component: 'checkbox',
            caption: 'I agree for year subscription',
            type: 'checkbox',
            subfields: []
          },
    
        ],

      }
    ]
  },

]

export default mockGraphqlData
