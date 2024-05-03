import { deleteJobAction } from '@/utils/actions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export default function DeleteJobBtn({ id }: { id: string }) {
	const { toast } = useToast();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => deleteJobAction(id),
		onSuccess: (data) => {
			if (!data) {
				toast({ description: 'Something went wrong' });
				return;
			}
			queryClient.invalidateQueries({ queryKey: ['jobs'] });
			queryClient.invalidateQueries({ queryKey: ['stats'] });
			queryClient.invalidateQueries({ queryKey: ['charts'] });
			toast({
				title: 'Job deleted',
			});
		},
	});

	return (
		<Button size='sm' disabled={isPending} onClick={() => mutate(id)}>
			{isPending ? 'Deleting...' : 'Delete'}
		</Button>
	);
}
