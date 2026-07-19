import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './Students/students.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [StudentsModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}