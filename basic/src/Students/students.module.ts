import { Module } from '@nestjs/common';
import { Students } from './students.controller';
import { StudentsService } from './students.service';

@Module({
    controllers: [Students],
    providers: [StudentsService],
})
export class StudentsModule {}