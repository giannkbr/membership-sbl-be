const Member = require('../models/member');

class MemberRepository {
  async create(member) {
    return await Member.create(member);
  }

  async findAll() {
    return await Member.findAll();
  }

  async findById(id) {
    return await Member.findByPk(id);
  }

  async update(id, member) {
    await Member.update(member, { where: { id } });
    return this.findById(id);
  }

  async delete(id) {
    return await Member.destroy({ where: { id } });
  }
}

module.exports = new MemberRepository();
