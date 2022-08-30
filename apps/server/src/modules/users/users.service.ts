import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, UpdateWriteOpResult } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (userExists) {
      throw new BadRequestException('Email already exists');
    }

    const { password } = createUserDto;
    const hashPassword = await hash(password, 10);
    return new this.userModel({
      ...createUserDto,
      password: hashPassword,
    }).save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().lean<User[]>().exec();
  }

  async findOneById(id: ObjectId): Promise<User> {
    return this.userModel.findById(id).lean<User>().exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).lean<User>().exec();
  }

  async update(
    _id: ObjectId,
    updateUserDto: UpdateUserDto
  ): Promise<UpdateWriteOpResult> {
    return this.userModel
      .updateOne({ _id }, { $set: { ...updateUserDto } })
      .exec();
  }

  remove(_id: ObjectId) {
    return this.userModel.deleteOne({ _id }).exec();
  }
}
