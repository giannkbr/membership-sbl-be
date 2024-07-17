const memberRepository = require('../repositories/memberRepository');

class MemberService {
  async createMember(memberData) {
    return await memberRepository.create(memberData);
  }

  async getAllMembers() {
    return await memberRepository.findAll();
  }

  async getMemberById(id) {
    return await memberRepository.findById(id);
  }

  async updateMember(id, memberData) {
    return await memberRepository.update(id, memberData);
  }

  async deleteMember(id) {
    return await memberRepository.delete(id);
  }
}

module.exports = new MemberService();
