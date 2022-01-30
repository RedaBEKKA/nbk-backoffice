import React from 'react';
import {
  Box,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import useEdite from '../hooks/useEdite';
export default function Edite() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useEdite();
  return (
    <Box p="4" bg="white" rounded="xl" shadow="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }}>
          <FormControl>
            <FormLabel> userTag</FormLabel>
            <Input variant="filled" placeholder="userTag" {...register('userTag')}></Input>
          </FormControl>
          <FormControl>
            <FormLabel> specifiedUSPerson</FormLabel>
            <Select {...register('specifiedUSPerson')} variant="filled">
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> controllingPersonType</FormLabel>
            <Select {...register('controllingPersonType')} variant="filled">
              <option value="0">None</option>
              <option value="1">ShareHolder</option>
              <option value="2">Other relationships</option>
              <option value="3">Director</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> employeeType</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="0">None</option>
              <option value="1">Leader</option>
              <option value="2">Employee</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> title</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="M">M</option>
              <option value="MME">MME</option>
              <option value="MLLE">MLLE</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> incomeRange</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="0-18">0-18</option>
              <option value="19-23">19-23</option>
              <option value="24-27">24-27</option>
              <option value="28-35">28-35</option>
              <option value="36-56">36-56</option>
              <option value="57-*">57-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> firstname</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="firstname"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> lastname</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="lastname"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> middleNames</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="middleNames"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> birthday</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="User's birth date. Format YYYY-MM-DD"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> email</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="email"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address1</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="address1"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address2</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="address2"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> address3</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="address3"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> postcode</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="postcode"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> city</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="city"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> state</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="state"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> country</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="country"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> phone</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="phone"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> mobile</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="mobile"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> nationality</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="nationality"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> nationalityOther</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="nationalityOther"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> placeOfBirth</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="placeOfBirth"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> birthCountry</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="birthCountry"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> occupation</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="occupation"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalName</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="legalName"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalRegistrationNumber</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="legalRegistrationNumber"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalTvaNumber</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="legalTvaNumber"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalRegistrationDate</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="legalRegistrationDate"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalShareCapital</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="Business share capital"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalSector</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="Business sector. NAF code in France"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> legalAnnualTurnOver</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">Business annual turnover (in k€)</option>

              <option value="0-39">0-39</option>
              <option value="40-99">40-99</option>
              <option value="100-249">100-249</option>
              <option value="250-999">250-999</option>
              <option value="1000-2999">1000-2999</option>
              <option value="3000-9999">3000-9999</option>
              <option value="10000-99999">10000-99999</option>
              <option value="100000-*">100000-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> legalNetIncomeRange</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">Business net income range (in k€)</option>

              <option value="0-4">0-4</option>
              <option value="5-9">5-9</option>
              <option value="10-49">10-49</option>
              <option value="50-149">50-149</option>
              <option value="150-499">150-499</option>
              <option value="500-*">500-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> legalNumberOfEmployeeRange</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">Business number of employees range</option>

              <option value="0">0</option>
              <option value="1-9">1-9</option>
              <option value="10-99">10-99</option>
              <option value="100-249">100-249</option>
              <option value="250-*">250-*</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> effectiveBeneficiary</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="Business effective beneficiary

"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> language</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="User's prefered language (ISO 639-1)
"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> taxNumber</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="User's tax identification number. If the taxResidence is not set to FR, the field is mandatory.


"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> taxResidence</FormLabel>
            <Input
              {...register('employeeType')}
              variant="filled"
              placeholder="User's tax residence country code (2 char code following ISO 3166 norm).




"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> position</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="position"></Input>
          </FormControl>
          <FormControl>
            <FormLabel> personalAssets</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">User's personal assets range exprimed in K€.</option>
              <option value="0-2">0-2</option>
              <option value="3-22">3-22</option>
              <option value="23-128">23-128</option>
              <option value="129-319">129-319</option>
              <option value="320-464">320-464</option>
              <option value="465-">465-</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> activityOutsideEu</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">Commercial activity outside of EU (only for Professionals)</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> economicSanctions</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">
                Company, subsidiaries, entities, employees, directors, joint ventures are subject to
                Economic Sanctions (only for Professionals)
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> residentCountriesSanctions</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">
                Company, subsidiaries, entities, employees, directors, joint ventures are subject to
                Economic Sanctions (only for Professionals)
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> involvedSanctions</FormLabel>
            <Select {...register('employeeType')} variant="filled">
              <option value="">
                Company involved in countries or with people subject to Economic Sanctions after
                careful review (only for Professionals)
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel> timezone</FormLabel>
            <Input {...register('employeeType')} variant="filled" placeholder="timezone"></Input>
          </FormControl>
        </SimpleGrid>
        <Flex my="8" justifyContent="flex-end">
          <Button
            sLoading={isSubmitting}
            isDisabled={isSubmitting}
            type="submit"
            colorScheme="green"
          >
            Éditer
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
