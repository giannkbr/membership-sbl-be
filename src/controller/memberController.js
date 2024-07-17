const { validationResult } = require('express-validator');
const memberService = require('../service/memberService');

class MemberController {
  async createMember(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const member = await memberService.createMember(req.body);
      res.status(201).json(member);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllMembers(req, res) {
    try {
      const members = await memberService.getAllMembers();
      res.status(200).json(members);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getMemberById(req, res) {
    try {
      const member = await memberService.getMemberById(req.params.id);
      if (member) {
        res.status(200).json(member);
      } else {
        res.status(404).json({ error: 'Member not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateMember(req, res) {
    try {
      const member = await memberService.updateMember(req.params.id, req.body);
      if (member) {
        res.status(200).json(member);
      } else {
        res.status(404).json({ error: 'Member not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteMember(req, res) {
    try {
      await memberService.deleteMember(req.params.id);
      res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new MemberController();
