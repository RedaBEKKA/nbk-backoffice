import React from 'react';
import { Select, FormControl, FormLabel, Button, Stack, Box } from '@chakra-ui/react';
import useFilter from '../hooks/useFilter';

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <FormControl>
          <FormLabel>userStatus</FormLabel>
          <Select variant="filled" {...register('userStatus')}>
            <option value={''}>none</option>
            <option value="validated">validé</option>
            <option value="pending">en attendant</option>
            <option value="canceled">annulé</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register('sortBy')}>
            <option value={''}>none</option>
            <option value={'createdDateFrom'}>createdDateFrom</option>
            <option value={'userId'}>userId</option>
            <option value={'userTypeId'}>walletTypeId</option>
            <option value={'updatedDateTo'}>updatedDateTo</option>
            <option value={'updatedDateFrom'}>updatedDateFrom</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register('sortOrder')}>
            <option value={''}>none</option>
            <option value={'DESC'}>DESC</option>
            <option value={'ASC'}>ASC</option>
          </Select>
        </FormControl>
      </Stack>

      <Box m="4" display="flex" justifyContent="flex-end">
        <Button colorScheme="blue" isLoading={isSubmitting} isDisabled={isSubmitting} type="submit">
          apply
        </Button>
      </Box>
    </form>
  );
}
