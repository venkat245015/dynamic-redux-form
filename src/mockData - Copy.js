const mockGraphqlData = [
  {
    name: 'step1',
    title: 'Step 1',
    sections: [
      {
        name: 'applicant',
        caption: 'Applicant Information',
        fields: [
          {
            name: 'firstName',
            component: 'input',
            caption: 'First Name',
            initialValue: 'Oleg',
            validationRule: '^(?!\\s*$).+',
            subfields: []
          },
          {
            name: 'lastName',
            component: 'input',
            caption: 'Last Name',
            initialValue: 'Kalyta',
            validationRule: '^.{6,}$'
            , subfields: []
          },
          {
            name: 'middleName',
            component: 'input',
            caption: 'Middle Name',
            initialValue: 'Dmytrovych'
            , subfields: []
          },
          {
            name: 'dateOfBirth',
            component: 'input',
            type: 'date',
            caption: 'Date of Birth',
            initialValue: '26/07/1988'
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
            initialValue: 'MALE'
            , subfields: [
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
            name: 'isUACitizen',
            component: 'radio',
            caption: 'Is Citizen of Ukraine',
            options: [
              { value: 'TRUE', title: 'YES' },
              { value: 'FALSE', title: 'NO' }
            ],
            initialValue: undefined
            , subfields: []
          },
          {
            name: 'SSN',
            type: 'number',
            component: 'input',
            caption: 'SSN',
            initialValue: '435i626758924'
            , subfields: []
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
            initialValue: 'MARRIED'
            , subfields: []
          },
          {
            name: 'maidenName',
            component: 'input',
            caption: 'Maiden Name'
            , subfields: []
          },
          {
            name: 'maidenName1',
            component: 'input',
            caption: 'Maiden Name1'
            , subfields: []
          },
          {
            name: 'maritalStatus1',
            component: 'multiselect',
            caption: 'NAME LIST',
            options: [
              { id: 1, label: 'John' },
              { id: 2, label: 'Miles' },
              { id: 3, label: 'Charles' },
              { id: 4, label: 'Herbie' },]
            , subfields: []
          },

        ],

      }
    ]
  },

]

export default mockGraphqlData
